import produce from 'immer';
// action type
const TAG_SEARCH = 'tags/search';
interface TagSearchAction {
    type: typeof TAG_SEARCH;
    payload: {
        lastKey?: string | number;
        filter: string;
    };
}

type Action = TagSearchAction;
// action creator

interface Search {
    lastKey?: string | number;
    filter?: string;
}
export const tagSearch = (searchParams: Search) => {
    return {
        type: TAG_SEARCH,
        payload: {
            ...searchParams,
        }
    };
};
// reducer
const initState = {
    tags: [
        'magenta',
        'red',
        'volcano',
        'orange',
        'gold',
        'lime',
        'green',
        'cyan',
        'blue',
        'geekblue',
        'purple',
    ]
}

const tagReducer = (state = initState, action: Action) => {
    return produce(state, draft => {
        switch (action.type) {
            case TAG_SEARCH:
            console.log(action);
            break;
        }
    });
};

export default tagReducer;