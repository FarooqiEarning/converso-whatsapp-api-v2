import { Logger } from '@config/logger.config';
import { BaileysEventMap, MessageUpsertType, WAMessage } from 'baileys';
import { catchError, concatMap, delay, EMPTY, from, retryWhen, Subject, Subscription, take, tap } from 'rxjs';

type MessageUpsertPayload = BaileysEventMap['messages.upsert'];
type MountProps = {
  onMessageReceive: (payload: MessageUpsertPayload, settings: any) => Promise<void>;
};

export class BaileysMessageProcessor {
  private processorLogs = new Logger('BaileysMessageProcessor');
  private subscription?: Subscription;

  protected messageSubject = new Subject<{
    messages: WAMessage[];
    type: MessageUpsertType;
    requestId?: string;
    settings: any;
  }>();

  mount({ onMessageReceive }: MountProps) {
    // If a subscription already exists, clean it up first.
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }

    // If the Subject was completed, recreate it.
    if (this.messageSubject.closed) {
      this.processorLogs.warn('MessageSubject was closed, recreating...');
      this.messageSubject = new Subject<{
        messages: WAMessage[];
        type: MessageUpsertType;
        requestId?: string;
        settings: any;
      }>();
    }

    this.subscription = this.messageSubject
      .pipe(
        tap(({ messages }) => {
          this.processorLogs.log(`Processing batch of ${messages.length} messages`);
        }),
        concatMap(({ messages, type, requestId, settings }) =>
          from(onMessageReceive({ messages, type, requestId }, settings)).pipe(
            retryWhen((errors) =>
              errors.pipe(
                tap((error) => this.processorLogs.warn(`Retrying message batch due to error: ${error.message}`)),
                delay(1000), // 1-second delay
                take(3), // Maximum 3 attempts
              ),
            ),
          ),
        ),
        catchError((error) => {
          this.processorLogs.error(`Error processing message batch: ${error}`);
          return EMPTY;
        }),
      )
      .subscribe({
        error: (error) => {
          this.processorLogs.error(`Message stream error: ${error}`);
        },
      });
  }

  processMessage(payload: MessageUpsertPayload, settings: any) {
    const { messages, type, requestId } = payload;
    this.messageSubject.next({ messages, type, requestId, settings });
  }

  onDestroy() {
    this.subscription?.unsubscribe();
    this.messageSubject.complete();
  }
}
