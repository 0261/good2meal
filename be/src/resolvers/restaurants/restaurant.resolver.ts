import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';
import { Restaurant, QueryRestaurant } from './restaurant.model';
import { DynamoDB } from '../../services/dynamodb';

@Resolver()
export class RestaurantResolver {
    private readonly dynamodb: DynamoDB = new DynamoDB();
    @Query(returns => [Restaurant], {
        description: '음식점 검색',
        name: 'GetRestaurants',
    })
    getRestaurants(): Array<Restaurant> {
        try {
            return [];
        } catch (error) {
            throw new Error(error);
        }
    }
}
