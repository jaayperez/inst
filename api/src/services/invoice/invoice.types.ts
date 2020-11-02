import {
  Field,
  ID,
  Float,
  ObjectType,
  registerEnumType,
  InputType,
  Int,
} from 'type-graphql';
import { User } from '../user.types';

@ObjectType()
export class Invoice {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => User)
  customer: User;

  @Field(() => User)
  vendor: User;

  @Field(() => Status, { nullable: true })
  status?: Status;

  @Field(() => [Item])
  items: Item[];

  @Field({ nullable: true })
  currency?: string;

  @Field(() => Float)
  total: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

enum Status {
  PENDING = 'pending',
  DELIVERED = 'delivered',
  SHIPPED = 'shipped',
}

registerEnumType(Status, {
  name: 'Status', // this one is mandatory
  description: 'The basic Status', // this one is optional
});

@ObjectType()
export class Item {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  unitPrice: number;

  @Field(() => Int)
  unit: number;
}

@InputType({ description: 'New User Data' })
export class UserInput implements Partial<User> {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  address?: string;
}
@InputType({ description: 'New Item Data' })
export class ItemInput implements Partial<Item> {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  unitPrice: number;

  @Field(() => Int)
  unit: number;
}

@InputType({ description: 'New recipe data' })
export class AddInvoiceInput implements Partial<Invoice> {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => UserInput)
  customer: UserInput;

  @Field(() => UserInput)
  vendor: UserInput;

  @Field(() => Status, { nullable: true })
  status?: Status;

  @Field(() => [ItemInput])
  items: ItemInput[];

  @Field(() => Float)
  total: number;

  @Field()
  createdAt: Date;
}
