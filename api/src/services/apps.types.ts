import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class App {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  type?: string[];

  @Field({ nullable: true })
  isInstalled?: boolean;

  @Field()
  createdAt: Date;
}
