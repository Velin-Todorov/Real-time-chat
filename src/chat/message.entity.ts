import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop()
  _id: Types.UUID;

  @Prop()
  from: Types.UUID; // references the user from which the message is from

  @Prop()
  to: Types.UUID; // references the user to whihc the message nees to be send

  @Prop()
  content: string;

  @Prop()
  created_at: Date;
}
export const MessageSchema = SchemaFactory.createForClass(Message);
