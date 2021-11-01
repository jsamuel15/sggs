import React from 'react';
import {
    Switch,
    Route,
    useHistory,
} from 'react-router-dom';

// Pages
import HomePage from '../pages/Home/HomePage';

const Routes: React.FC = () => {
// constants
    const history = useHistory();

    return (
        <Switch>
            <Route path="/home" exact component={HomePage} />
        </Switch>
    );
};

export default Routes;
