// libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import HomePage from '../pages/Home/HomePage';
import WebScreenPage from '../pages/WebPages/WebScreenPage';
import AboutPage from '../pages/About/AboutPage';
import GaleryPage from '../pages/Galery/GaleryPage';
import OurTeamPage from '../pages/OurTeam/OurTeamPage';
import ContactsPage from '../pages/Contacts/ContactsPage';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route path="/webScreen" exact component={WebScreenPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/galery" exact component={GaleryPage} />
        <Route path="/ourTeam" exact component={OurTeamPage} />
        <Route path="/contacts" exact component={ContactsPage} />
    </Switch>
);

export default Routes;
