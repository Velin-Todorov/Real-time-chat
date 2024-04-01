import { Module } from '@nestjs/common';
import { ChatGateway } from './gateway/chat.gateway';

@Module({
  imports: [],
  exports: [],
  providers: [ChatGateway],
})
export class ChatModule {}
