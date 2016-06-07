import React from 'react';
import { Route, IndexRoute } from 'react-router';
import  App from './app';

import WelcomeView from '../views/welcome/welcome-view';

module.exports = (
    <Route path='/' component={App}>
        <Route name='welcome' path='welcome' component={WelcomeView}/>
    </Route>
);
