import { Field, ObjectType, ArgsType } from 'type-graphql';
import { Category } from '../categories/category.model';

@ObjectType({ description: '음식점 모델' })
export class Restaurant {
    @Field({ description: '파티션 키' })
    location!: string;
    @Field({ description: '소트 키 ' })
    id!: string;

    @Field({ nullable: true, description: '전화번호' })
    tel?: string;
    @Field({ nullable: true, description: '음식점 이름' })
    name?: string;

    @Field({ description: '보여질 음식점 이름' })
    display!: string;
    @Field({ description: '보여질 음식점 전화번호' })
    telDisplay!: string;

    @Field({ nullable: true, description: '음식점 주소' })
    addr?: string;
    @Field({ nullable: true, description: '음식점 영업시간' })
    bizhourInfo?: string;
    @Field(type => [String], {
        nullable: true,
        description: '음식점 대표 메뉴',
    })
    menuInfo?: Array<string>;
    @Field(type => [String], { nullable: true, description: '음식점 해시태그' })
    context?: Array<string>;

    @Field(type => [Category], { description: '음식점 카테고리' })
    category?: Array<Category>;
}

@ArgsType()
export class QueryRestaurant {
    @Field({ nullable: true })
    imgUrl?: string;
    @Field()
    id!: string;
}
