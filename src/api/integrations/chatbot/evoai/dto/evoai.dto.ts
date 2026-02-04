import { BaseChatbotDto, BaseChatbotSettingDto } from '../../base-chatbot.dto';

export class EvoaiDto extends BaseChatbotDto {
  agentUrl?: string;
  instanceCode?: string;
}

export class EvoaiSettingDto extends BaseChatbotSettingDto {
  evoaiIdFallback?: string;
}
