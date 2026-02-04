import { PrismaRepository } from '@api/repository/repository.service';
import { WAMonitoringService } from '@api/services/monitor.service';
import { Logger } from '@config/logger.config';
import { conversoWhatsappApiBot, IntegrationSession } from '@prisma/client';

import { BaseChatbotController } from '../../base-chatbot.controller';
import { conversoWhatsappApiBotDto } from '../dto/conversoWhatsappApiBot.dto';
import { conversoWhatsappApiBotService } from '../services/conversoWhatsappApiBot.service';

export class conversoWhatsappApiBotController extends BaseChatbotController<conversoWhatsappApiBot, conversoWhatsappApiBotDto> {
  constructor(
    private readonly conversoWhatsappApiBotService: conversoWhatsappApiBotService,
    prismaRepository: PrismaRepository,
    waMonitor: WAMonitoringService,
  ) {
    super(prismaRepository, waMonitor);

    this.botRepository = this.prismaRepository.conversoWhatsappApiBot;
    this.settingsRepository = this.prismaRepository.conversoWhatsappApiBotSetting;
    this.sessionRepository = this.prismaRepository.integrationSession;
  }

  public readonly logger = new Logger('conversoWhatsappApiBotController');
  protected readonly integrationName = 'conversoWhatsappApiBot';

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
    return 'conversoWhatsappApi';
  }

  protected getAdditionalBotData(data: conversoWhatsappApiBotDto): Record<string, any> {
    return {
      apiUrl: data.apiUrl,
      instanceCode: data.instanceCode,
    };
  }

  // Implementation for bot-specific updates
  protected getAdditionalUpdateFields(data: conversoWhatsappApiBotDto): Record<string, any> {
    return {
      apiUrl: data.apiUrl,
      instanceCode: data.instanceCode,
    };
  }

  // Implementation for bot-specific duplicate validation on update
  protected async validateNoDuplicatesOnUpdate(
    botId: string,
    instanceId: string,
    data: conversoWhatsappApiBotDto,
  ): Promise<void> {
    const checkDuplicate = await this.botRepository.findFirst({
      where: {
        id: {
          not: botId,
        },
        instanceId: instanceId,
        apiUrl: data.apiUrl,
        instanceCode: data.instanceCode,
      },
    });

    if (checkDuplicate) {
      throw new Error('conversoWhatsappApi Bot already exists');
    }
  }

  // Process bot-specific logic
  protected async processBot(
    instance: any,
    remoteJid: string,
    bot: conversoWhatsappApiBot,
    session: IntegrationSession,
    settings: any,
    content: string,
    pushName?: string,
    msg?: any,
  ) {
    await this.conversoWhatsappApiBotService.process(instance, remoteJid, bot, session, settings, content, pushName, msg);
  }
}
