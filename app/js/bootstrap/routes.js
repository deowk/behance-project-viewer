import React from 'react';
import { Route, IndexRoute } from 'react-router';
import  App from './app';

import SearchView from '../views/search-view';

module.exports = (
    <Route path='/' component={App}>
        <Route name='search' path='search' component={SearchView}/>
        <IndexRoute component={SearchView} />
    </Route>
);
