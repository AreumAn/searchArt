import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer';
import ArtDetailContainer from './containers/ArtDetailContainer';

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={SearchContainer} />
            <Route path="/detail" component={ArtDetailContainer} />
        </Switch>
    );
};

export default App;
