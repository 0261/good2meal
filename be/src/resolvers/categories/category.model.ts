import { ObjectType, Field } from 'type-graphql';

@ObjectType({ description: '음식점 카테고리' })
export class Category {
    @Field({ description: '파티션 키' })
    location!: string;
    @Field({ description: '소트 키' })
    categoryName?: string;
    @Field(type => [String], { description: '연관 카테고리' })
    recommandation?: Array<string>;
}
