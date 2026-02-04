import { BaseChatbotDto, BaseChatbotSettingDto } from '../../base-chatbot.dto';

export class conversoWhatsappApiBotDto extends BaseChatbotDto {
  apiUrl: string;
  apiKey: string;
}

export class conversoWhatsappApiBotSettingDto extends BaseChatbotSettingDto {
  botIdFallback?: string;
}
