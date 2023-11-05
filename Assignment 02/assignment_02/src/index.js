import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Shop from "./Shopping.js";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Shop />
    </React.StrictMode>
);