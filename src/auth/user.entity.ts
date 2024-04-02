import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ unique: true })
  username: string; // references the user from which the message is from

  @Prop({ unique: true })
  email: string; // references the user to whihc the message nees to be send

  @Prop()
  password: string;

  @Prop({ default: true })
  is_active: boolean;

  @Prop({ default: Date.now() })
  last_active: Date;

  @Prop({ default: Date.now() })
  created_at: Date;

  @Prop({ default: Date.now() })
  updated_at: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);
