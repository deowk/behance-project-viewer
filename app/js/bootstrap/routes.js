import React from 'react';
import { Route, IndexRoute } from 'react-router';
import  App from './app';

import SearchView from '../views/search-view';
import MainView from '../views/main-view';
import ProjectsView from '../views/projects-view';

module.exports = (
    <Route path='/' component={App}>
        <Route name='main' path='main' component={MainView}>
          <Route name='projects' path='projects' component={ProjectsView}/>
        </Route>
        <Route name='search' path='search' component={SearchView}/>
        <IndexRoute component={SearchView} />
    </Route>
);
