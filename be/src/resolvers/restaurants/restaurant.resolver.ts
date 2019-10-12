import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';
import { Restaurant, CreateRestaurant } from './restaurant.model';
import { Expression, equal } from '@typemon/dynamodb-expression';
import { DynamoDB } from '../../services/dynamodb';

@Resolver()
export class RestaurantResolver {
    private readonly dynamodb: DynamoDB = new DynamoDB();
    @Query(returns => [Restaurant], {
        description: '음식점 검색',
        name: 'GetRestaurants',
    })
    async getRestaurants(): Promise<Array<Restaurant>> {
        try {
            const expression = equal('location', '구로디지털단지');
            const results = await this.dynamodb.query('restaurant', expression);
            const restaurants = results.Items as Array<Restaurant>;
            const total = results.ScannedCount;
            return restaurants;
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

            await this.dynamodb.put(
                'restaurant',
                newRestaurantData.location,
                `${categories}#${newRestaurantData.rank}`,
                newRestaurantData,
            );

            return 'true';
        } catch (error) {
            throw new Error(error);
        }
    }
}
