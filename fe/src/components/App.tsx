import React from 'react';
import { Switch, Route } from 'react-router';

import HomeContainer from '../containers/Home/Home';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={HomeContainer} />
        </Switch>
    );
}

export default App;
