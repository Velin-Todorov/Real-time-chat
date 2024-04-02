import { Module } from '@nestjs/common';
import { ChatGateway } from './gateway/chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './message.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  exports: [],
  providers: [ChatGateway],
})
export class ChatModule {}
