import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';

@Resolver()
export class RestaurantResolver {
    @Query(returns => String)
    async helloRestaurants() {
        try {
            return 'hello restaurants';
        } catch (error) {
            throw new Error(error);
        }
    }
}
