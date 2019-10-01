import { combineReducers } from 'redux';
import restaurant from './restaurants/search';

export const rootReducer = combineReducers({
    restaurant,
});

export type AppState = ReturnType<typeof rootReducer>;
