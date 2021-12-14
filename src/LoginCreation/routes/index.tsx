// libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import LoginPage from '../pages/Login/LoginPage';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={LoginPage} />
    </Switch>
);

export default Routes;
