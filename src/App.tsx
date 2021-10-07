// libraries
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './ListCakes/Pages/styles/global';

// js
// import Routes from './ListCakes/routes';
import Routes from './ListPerformanceCompany/routes';

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <GlobalStyle />
    </>
);

export default App;
