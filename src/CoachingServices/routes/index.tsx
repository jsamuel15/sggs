// libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import AuthPage from '../pages/Auth/AuthPage';
import HomePage from '../pages/Home/HomePage';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={AuthPage} />
        <Route path="/home" exact component={HomePage} />
    </Switch>
);

export default Routes;
