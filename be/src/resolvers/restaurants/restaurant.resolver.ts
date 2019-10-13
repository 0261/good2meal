import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';
import {
    Restaurant,
    CreateRestaurant,
    QueryRestaurant,
} from './restaurant.model';
import { equal, Expression, contains, or } from '@typemon/dynamodb-expression';
import { DynamoDB } from '../../services/dynamodb';

@Resolver()
export class RestaurantResolver {
    private readonly dynamodb: DynamoDB = new DynamoDB();
    @Query(returns => [Restaurant], {
        description: '음식점 검색',
        name: 'GetRestaurants',
    })
    async getRestaurants(
        @Arg('searchKey', {
            description: '음식점명 또는 카테고리',
            nullable: true,
        })
        searchKey?: string,
    ): Promise<Array<Restaurant>> {
        let filterExpression;
        try {
            if (searchKey) {
                filterExpression = contains('display', searchKey);
            }
            const expression = equal('location', '구로디지털단지');
            const results = await this.dynamodb.query(
                'restaurant',
                expression,
                filterExpression,
            );
            const restaurants = results.Items as Array<Restaurant>;
            const total = results.ScannedCount;
            // LastEvaluatedKey를 이용한 인피니티스크롤 추가
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
                `${newRestaurantData.rank}#${categories}`,
                newRestaurantData,
            );

            return 'true';
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}
