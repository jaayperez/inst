import { Resolver, Query } from 'type-graphql';
import { loadIntegration } from '../../data/integration.data';
import { Integration } from './integration.types';

@Resolver()
export default class IntegrationResolver {
  private readonly integrationCollection: Integration = loadIntegration();

  @Query(() => Integration)
  async integration(): Promise<Integration | undefined> {
    return await this.integrationCollection;
  }
}
