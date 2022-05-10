// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// js
import App from './App';

// methods
function renderElement() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}

// render
ReactDOM.render(renderElement(), document.getElementById('root'));
