import { Resolver, Query } from 'type-graphql';
import { loadDashboard } from '../../data/dashboard.data';
import { Dashboard } from './dashboard.types';

@Resolver()
export default class DashboardResolver {
  private readonly dashboardCollection: Dashboard = loadDashboard();

  @Query(() => Dashboard)
  async dashboard(): Promise<Dashboard | undefined> {
    return await this.dashboardCollection;
  }
}
