import './index.css';
import ReactDOM from "react-dom/client";
import React from "react";
import App from './App.jsx';
import { NavigationProvider } from './context/navigation.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);