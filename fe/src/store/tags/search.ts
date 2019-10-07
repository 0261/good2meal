import produce from 'immer';
// action type
const TAG_SEARCH = 'tags/search';
interface TagSearchAction {
    type: typeof TAG_SEARCH;
    payload: {
        tagName: string;
    };
}

type Action = TagSearchAction;
// action creator

export const tagSearch = (tagName: string) => {
    return {
        type: TAG_SEARCH,
        payload: {
            tagName,
        },
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
    ],
};

const tagReducer = (state = initState, action: Action) => {
    return produce(state, draft => {
        switch (action.type) {
            case TAG_SEARCH:
                break;
        }
    });
};

export default tagReducer;
