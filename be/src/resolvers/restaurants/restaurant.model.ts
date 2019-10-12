import { Field, ObjectType, ArgsType, InputType } from 'type-graphql';

@ObjectType({ description: '음식점 모델' })
export class Restaurant {
    @Field({ description: 'id' })
    restaurantId!: string;

    @Field({ description: '파티션키' })
    location!: string;

    @Field({ description: '랭크 소트키' })
    rank!: string;

    @Field({ nullable: true, description: '전화번호' })
    tel?: string;
    @Field({ nullable: true, description: '음식점 이름' })
    name?: string;

    @Field({ description: '보여질 음식점 이름' })
    display!: string;
    @Field({ description: '보여질 음식점 전화번호' })
    telDisplay!: string;

    @Field({ nullable: true, description: '음식점 주소' })
    roadAddress?: string;
    @Field({ nullable: true, description: '음식점 주소' })
    address?: string;
    @Field({ nullable: true, description: '음식점 영업시간' })
    bizhourInfo?: string;
    @Field(type => [String], {
        nullable: true,
        description: '음식점 대표 메뉴',
    })
    menuInfo?: Array<string>;
    @Field(type => [String], { nullable: true, description: '음식점 해시태그' })
    context!: Array<string>;
    @Field(type => [String], { nullable: true, description: '음식점 카테고리' })
    category!: Array<string>;
}

@ArgsType()
export class QueryRestaurant {}

@InputType()
export class CreateRestaurant {
    @Field({ description: 'id' })
    restaurantId!: string;

    @Field({ description: '파티션키' })
    location!: string;

    @Field({ description: '랭크 소트키' })
    rank!: string;

    @Field({ nullable: true, description: '전화번호' })
    tel?: string;
    @Field({ nullable: true, description: '음식점 이름' })
    name?: string;

    @Field({ description: '보여질 음식점 이름' })
    display!: string;
    @Field({ description: '보여질 음식점 전화번호' })
    telDisplay!: string;

    @Field({ nullable: true, description: '음식점 주소' })
    roadAddress?: string;
    @Field({ nullable: true, description: '음식점 주소' })
    address?: string;
    @Field({ nullable: true, description: '음식점 영업시간' })
    bizhourInfo?: string;
    @Field(type => [String], {
        nullable: true,
        description: '음식점 대표 메뉴',
    })
    menuInfo?: Array<string>;
    @Field(type => [String], { nullable: true, description: '음식점 해시태그' })
    context!: Array<string>;
    @Field(type => [String], { nullable: true, description: '음식점 카테고리' })
    category!: Array<string>;
}
