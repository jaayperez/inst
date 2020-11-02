import { Resolver, Query, Arg, Int } from 'type-graphql';
import { loadProducts } from '../../data/product.data';
import { Product, ProductsResponse } from './product.types';

@Resolver()
export default class ProductResolver {
  private readonly productsCollection: Product[] = loadProducts();

  @Query(() => ProductsResponse, { description: 'Get all products' })
  async products(
    @Arg('limit', () => Int, { defaultValue: 9 }) limit: number,
    @Arg('offset', () => Int, { defaultValue: 0 }) offset: number
  ): Promise<ProductsResponse> {
    let products = await this.productsCollection;

    const hasMore = products.length > offset + limit;

    return await {
      items: products.slice(offset, offset + limit),
      total: this.productsCollection.length,
      hasMore,
    };
  }

  @Query(() => Product)
  async product(@Arg('slug') slug: string): Promise<Product | undefined> {
    return await this.productsCollection.find(item => item.slug === slug);
  }
}
