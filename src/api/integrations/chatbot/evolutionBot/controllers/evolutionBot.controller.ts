import { PrismaRepository } from '@api/repository/repository.service';
import { WAMonitoringService } from '@api/services/monitor.service';
import { Logger } from '@config/logger.config';
import { converso-whatsapp-apiBot, IntegrationSession } from '@prisma/client';

import { BaseChatbotController } from '../../base-chatbot.controller';
import { converso-whatsapp-apiBotDto } from '../dto/converso-whatsapp-apiBot.dto';
import { converso-whatsapp-apiBotService } from '../services/converso-whatsapp-apiBot.service';

export class converso-whatsapp-apiBotController extends BaseChatbotController<converso-whatsapp-apiBot, converso-whatsapp-apiBotDto> {
  constructor(
    private readonly converso-whatsapp-apiBotService: converso-whatsapp-apiBotService,
    prismaRepository: PrismaRepository,
    waMonitor: WAMonitoringService,
  ) {
    super(prismaRepository, waMonitor);

    this.botRepository = this.prismaRepository.converso-whatsapp-apiBot;
    this.settingsRepository = this.prismaRepository.converso-whatsapp-apiBotSetting;
    this.sessionRepository = this.prismaRepository.integrationSession;
  }

  public readonly logger = new Logger('converso-whatsapp-apiBotController');
  protected readonly integrationName = 'converso-whatsapp-apiBot';

  integrationEnabled = true; // Set to true by default or use config value if available
  botRepository: any;
  settingsRepository: any;
  sessionRepository: any;
  userMessageDebounce: { [key: string]: { message: string; timeoutId: NodeJS.Timeout } } = {};

  // Implementation of abstract methods required by BaseChatbotController

  protected getFallbackBotId(settings: any): string | undefined {
    return settings?.botIdFallback;
  }

  protected getFallbackFieldName(): string {
    return 'botIdFallback';
  }

  protected getIntegrationType(): string {
    return 'converso-whatsapp-api';
  }

  protected getAdditionalBotData(data: converso-whatsapp-apiBotDto): Record<string, any> {
    return {
      apiUrl: data.apiUrl,
      apiKey: data.apiKey,
    };
  }

  // Implementation for bot-specific updates
  protected getAdditionalUpdateFields(data: converso-whatsapp-apiBotDto): Record<string, any> {
    return {
      apiUrl: data.apiUrl,
      apiKey: data.apiKey,
    };
  }

  // Implementation for bot-specific duplicate validation on update
  protected async validateNoDuplicatesOnUpdate(
    botId: string,
    instanceId: string,
    data: converso-whatsapp-apiBotDto,
  ): Promise<void> {
    const checkDuplicate = await this.botRepository.findFirst({
      where: {
        id: {
          not: botId,
        },
        instanceId: instanceId,
        apiUrl: data.apiUrl,
        apiKey: data.apiKey,
      },
    });

    if (checkDuplicate) {
      throw new Error('converso-whatsapp-api Bot already exists');
    }
  }

  // Process bot-specific logic
  protected async processBot(
    instance: any,
    remoteJid: string,
    bot: converso-whatsapp-apiBot,
    session: IntegrationSession,
    settings: any,
    content: string,
    pushName?: string,
    msg?: any,
  ) {
    await this.converso-whatsapp-apiBotService.process(instance, remoteJid, bot, session, settings, content, pushName, msg);
  }
}
