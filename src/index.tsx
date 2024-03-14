import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Landing from "./Pages/Landing";
import backgroundManager from "./Util/Background/BackgroundManager";
import About from "./Pages/About";
import Sponsors from "./Pages/Sponsors";
import Donate from "./Pages/Donate";
import Fundraising from "./Pages/Fundraising";
import Contact from "./Pages/Contact";
import Calendar from "./Pages/Calendar";
import Seasons from "./Pages/Seasons";
import App from "./App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: async () => {
            // TODO: This is extremely unreliable - backgroundManager should connect when #background-root loads
            setTimeout(backgroundManager.connect.bind(backgroundManager), 1);
            return null;
        },
        children: [
            { path: "/", element: <Landing /> },
            { path: "/about", element: <About /> },
            { path: "/sponsors", element: <Sponsors/> },
            { path: "/donate", element: <Donate/> },
            { path: "/fundraising", element: <Fundraising/> },
            { path: "/contact", element: <Contact/> },
            { path: "/calendar", element: <Calendar/> },
            { path: "/seasons", element: <Seasons/> },
            { path: "*", element: <div className="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color: "green" }}/> }
        ]
    }
]);

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);