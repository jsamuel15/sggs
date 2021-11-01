import React from 'react';
import {
    Switch,
    Route,
    useHistory,
    Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

// Pages
import LoginPage from '../pages/Login/LoginPage';
import HomePage from '../pages/Home/HomePage';
import RecoverPasswordPage from '../pages/RecoverPassword/RecoverPasswordPage';

// js
import { RootState } from '../store';

const Routes: React.FC = () => {
    // useSelector
    const infoUser = useSelector((state: RootState) => state.user.user);

    // constants
    const history = useHistory();

    // conditions
    if (!window.location.pathname.includes('/') && !infoUser) {
        history.push('/');
    }

    // rota para redirecionar o usuário quando digitar uma rota não encontrada.
    const pathNotFound = infoUser ? '/home' : '/';
    const RouteNotFound = infoUser ? HomePage : LoginPage;

    return (
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/RecoverPassword" exact component={RecoverPasswordPage} />
            <Route path={pathNotFound} component={RouteNotFound} />
            <Redirect to={pathNotFound} />
        </Switch>
    );
};

export default Routes;
