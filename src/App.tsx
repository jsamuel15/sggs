// libraries
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// js
import GlobalStyle from './ListCakes/Pages/styles/global';
import { store } from './ListPerformanceCompany/store/index';

// import Routes from './ListCakes/routes';
import Routes from './ListPerformanceCompany/routes';

const App: React.FC = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <GlobalStyle />
    </Provider>
);

export default App;
