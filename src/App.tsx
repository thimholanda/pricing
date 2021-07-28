import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobaStyle from './styles/global';
import { Routes } from './routes';

export function App() {
    return (
        <>
            <Router basename="/pricing">
                <Routes />
            </Router>
            <GlobaStyle />
        </>
    );
}

export default App;
