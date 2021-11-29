// libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from '../pages/Home/HomePage';
import Page from '../pages/WebPages/WebPages';
import About from '../pages/About/About';
import Galeria from '../pages/Galery/Galeria';
import Equipe from '../pages/OurTeam/Equipe';
import Contato from '../pages/Contacts/Contact';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/page" exact component={Page} />
        <Route path="/about" exact component={About} />
        <Route path="/galeria" exact component={Galeria} />
        <Route path="/nossaEquipe" exact component={Equipe} />
        <Route path="/contato" exact component={Contato} />
    </Switch>
);

export default Routes;
