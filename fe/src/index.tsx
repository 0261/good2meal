import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/modules';

import Root from './Root';

interface CustomWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
}
const customWindow = window as CustomWindow;
const devTools =
    customWindow.__REDUX_DEVTOOLS_EXTENSION__ &&
    customWindow.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);
ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root'),
);
