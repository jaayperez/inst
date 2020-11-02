import { Field, ID, ObjectType } from 'type-graphql';
import { User } from '../user.types';

@ObjectType()
export class Profile {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  bio?: string;

  @Field()
  role: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];

  @Field(() => [User], { nullable: true })
  followers?: User[];

  @Field(() => [User], { nullable: true })
  following?: User[];

  @Field()
  createdAt: Date;
}

@ObjectType()
export class Post {
  @Field(() => ID)
  id: number;

  @Field()
  type: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  video?: string;

  @Field(() => [String], { nullable: true })
  gallery?: string[];

  @Field({ nullable: true })
  numberOflike?: string;

  @Field({ nullable: true })
  numberOfcomment?: string;

  @Field(() => [Comment], { nullable: true })
  comments: Comment[];

  @Field({ nullable: true })
  createdAt: Date;
}

@ObjectType()
export class Comment {
  @Field(() => ID)
  id: number;

  @Field()
  role: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  username: string;

  @Field()
  comment: string;

  @Field({ nullable: true })
  createdAt: Date;
}
