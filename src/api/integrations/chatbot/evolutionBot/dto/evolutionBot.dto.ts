import { BaseChatbotDto, BaseChatbotSettingDto } from '../../base-chatbot.dto';

export class converso-whatsapp-apiBotDto extends BaseChatbotDto {
  apiUrl: string;
  apiKey: string;
}

export class converso-whatsapp-apiBotSettingDto extends BaseChatbotSettingDto {
  botIdFallback?: string;
}
