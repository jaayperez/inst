import { Field, ID, Int, Float, ObjectType } from 'type-graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field()
  slug: string;

  @Field()
  name: string;

  @Field()
  thumbnail: string;

  @Field(() => [Gallery])
  gallery: Gallery[];

  @Field(() => Float)
  price: number;

  @Field(() => Float, { nullable: true })
  salePrice?: number;

  @Field(() => Float, { nullable: true })
  discountInPercent?: number;

  @Field(() => Int, { defaultValue: 0 })
  stock: number;

  @Field(() => [Color], { nullable: true })
  colors?: Color[];

  @Field(() => [String])
  features: string[];

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt: Date;
}

@ObjectType()
export class ProductsResponse {
  @Field(() => [Product], { nullable: true })
  items: Product[];

  @Field(() => Int, { nullable: true })
  total?: number;

  @Field({ nullable: true })
  hasMore?: boolean;
}

@ObjectType()
export class Gallery {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  url: string;
}

@ObjectType()
export class Color {
  @Field(() => ID)
  id: string;

  @Field()
  label: string;

  @Field()
  code: string;
}
