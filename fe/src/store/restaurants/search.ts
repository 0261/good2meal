import produce from 'immer';
// 액션
const RESTAURANT_SEARCH = 'restaurant/search';

interface RestaurantSearchAction {
    type: typeof RESTAURANT_SEARCH;
    payload: {
        lastKey?: string | number;
        filter: string;
    };
}
type Action = RestaurantSearchAction;
// 액션 생성자
interface Search {
    lastKey?: string | number;
    filter?: string;
}
export const restaurantSearch = (searchParams: Search) => ({
    type: RESTAURANT_SEARCH,
    payload: {
        ...searchParams,
    },
});

// 리듀서
const initState = {
    restaurants: [
        {
            imgUrl: '',
            title: '',
            alt: '',
            desc: '',
        },
    ],
};
const restaurantReducer = (state = initState, action: Action) => {
    return produce(state, draft => {
        switch (action.type) {
            case RESTAURANT_SEARCH:
                draft.restaurants = draft.restaurants.concat({
                    imgUrl: 'https://via.placeholder.com/150.png/09f/fff',
                    title: '12312444',
                    alt: '123123',
                    desc: '123123',
                });
                break;
        }
    });
};

export default restaurantReducer;
