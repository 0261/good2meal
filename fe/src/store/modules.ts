import { combineReducers } from 'redux';
import restaurant from './restaurants/search';
import tag from './tags/search';

export const rootReducer = combineReducers({
    restaurant,
    tag,
});

export type AppState = ReturnType<typeof rootReducer>;
