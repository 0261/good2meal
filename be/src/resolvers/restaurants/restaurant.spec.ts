import { graphqlCall } from '../../test-setup/graphqlCall';

const dummy = [] as Array<any>;

const createRestaurant = `
mutation createRestaurants($data: CreateRestaurant!){
    createRestaurants(
        data: $data
    )
}
`;

describe('음식점', () => {
    it('음식점 생성', async done => {
        const jobs = dummy.map(async data => {
            const restaurant = {
                data: {
                    location: '구로디지털단지',
                    restaurantId: data.id,
                    rank: data.rank,
                    tel: data.tel,
                    name: data.name,
                    display: data.display,
                    telDisplay: data.tel,
                    category: data.category,
                    context: data.context,
                    menuInfo: data.menuInfo,
                    bizhourInfo: data.bizhourInfo,
                    roadAddress: data.roadAddress,
                    address: data.address,
                },
            };
            const result = await graphqlCall({
                source: createRestaurant,
                variableValues: restaurant,
            });
        });
        await Promise.all(jobs);
        await done();
    }, 2500000);
});
