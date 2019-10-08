import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';
import { Restaurant, QueryRestaurant } from './restaurant.model';

@Resolver()
export class RestaurantResolver {
    @Query(returns => [Restaurant])
    queryRestaurants(): Array<Restaurant> {
        try {
            return [
                {
                    location: '구로디지털단지',
                    display: '1',
                    id: '1',
                    telDisplay: '1',
                },
            ];
        } catch (error) {
            throw new Error(error);
        }
    }

    @Query(returns => String)
    argRestaurants(@Arg('arg1', { description: 'arg' }) arg1: string): string {
        console.log(arg1);
        return 'arg';
    }

    @Query(returns => String)
    argsRestauants(@Args() data: QueryRestaurant) {
        console.log(data);
        return 'args';
    }
}
