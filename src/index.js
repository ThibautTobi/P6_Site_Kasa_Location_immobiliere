import React from 'react';
//import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'

// mise a jour react 18 changement du render 
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>     
            </React.StrictMode>
);
