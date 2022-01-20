// libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import LoginPage from '../pages/Login/LoginPage';
import HomePage from '../pages/Home/HomePage';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/home" exact component={HomePage} />
    </Switch>
);

export default Routes;
