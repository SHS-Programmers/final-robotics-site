import React from 'react';
import Navbar from './Navigation';
import Footer from './Util/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import './App.css';

const App: React.FC = () => {
    return (
        <>
            <Analytics/>
            <div id="background-root"/>
            <Navbar/>
            <div id="content">
                <Outlet />
                <SpeedInsights/>
                <Footer/>
            </div>
        </>
    );
}

export default App;