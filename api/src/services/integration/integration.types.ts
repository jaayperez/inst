import { ObjectType, Field, ID } from 'type-graphql';
import { App } from '../apps.types';
@ObjectType()
export class Integration {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  shortDescription?: string;

  @Field(() => [String])
  banner: string[];

  @Field(() => [App])
  apps: App[];

  @Field()
  createdAt: Date;
}
