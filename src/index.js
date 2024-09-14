import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import $ from 'jquery';
import './index.css';
import './Fonts.css';
import reportWebVitals from './reportWebVitals';
import butter from './butter.js';
import AppProjects from './AppProjects.js';
import AppPCLow from './AppPCLow.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

butter.cleanup();
butter.init({
    wrapperDamper: .014
});

function updateStyles(pathname) {
    if (pathname.startsWith('/projects')) {
        $('html, body, #root').css({
            height: '100vh',
            width: '100vw',
            overflow: 'hidden'
        });
    } else {
        $('html, body, #root').css({
            height: '7250px',
            width: '100vw',
            overflowX: 'hidden'
        });
    }
}

function App() {
    const location = useLocation();

    React.useEffect(() => {
        updateStyles(location.pathname);
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/projects/*" element={<AppProjects />} />
            <Route path="/*" element={<AppPCLow />} />
        </Routes>
    );
}

root.render(
    <Router>
        <App />
    </Router>
);

reportWebVitals();
