import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import HomePage from '../Pages/Home/homePage';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
    </Switch>
);

export default Routes;