// libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from '../pages/Home/HomePage';
import Page from '../pages/Pags/Page';
import About from '../pages/about/About';
import Galeria from '../pages/galeria/Galeria';
import Equipe from '../pages/nossa equipe/Equipe';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/page" exact component={Page} />
        <Route path="/about" exact component={About} />
        <Route path="/galeria" exact component={Galeria} />
        <Route path="/nossaEquipe" exact component={Equipe} />
    </Switch>
);

export default Routes;
