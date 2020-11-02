import { Resolver, Query, Arg } from 'type-graphql';
import { loadProfile } from '../../data/profile.data';
import { Profile } from './profile.types';

@Resolver()
export default class ProfileResolver {
  private readonly profileCollection: Profile = loadProfile();

  @Query(() => Profile)
  async profile(@Arg('id') id: string): Promise<Profile | undefined> {
    console.log(id, 'user_id');

    return await this.profileCollection;
  }
}
