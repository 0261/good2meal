import { Field, ObjectType, ArgsType } from 'type-graphql';

@ObjectType({ description: '음식점 모델' })
export class Restaurant {
    @Field({ description: '파티션 키' })
    location!: string;
    @Field({ description: '소트 키 ' })
    id!: string;
}

@ArgsType()
export class QueryRestaurant {
    @Field()
    id!: string;
    @Field({ nullable: true })
    title?: string;
    @Field({ nullable: true })
    name?: string;
}
