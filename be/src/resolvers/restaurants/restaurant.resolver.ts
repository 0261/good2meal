import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';
import { Restaurant, CreateRestaurant } from './restaurant.model';
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

    @Mutation(type => String)
    async createRestaurants(@Arg('data') newRestaurantData: CreateRestaurant) {
        try {
            const categories = newRestaurantData.category
                .map(category => category.split(','))
                .reduce((acc, curr) => acc.concat(curr), [])
                .join('#');

            const putItem = {
                ...newRestaurantData,
                location: newRestaurantData.location,
                sortKey: `${categories}#${newRestaurantData.rank}`,
            };
            await this.dynamodb.put('restaurant', putItem);
            return 'true';
        } catch (error) {
            throw new Error(error);
        }
    }
}
