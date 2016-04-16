import React from 'react';
import { Route } from 'react-router';
import GenerateRoute from './utils/GenerateRoute';

export default (
    <Route component={ require('./pages/root') }>
        { GenerateRoute({
            paths: ['/', '/home'],
            component: require('./pages/Home')
        }) }
    </Route>
);