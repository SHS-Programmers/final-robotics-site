import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Landing from './Landing/Landing';
import About from './About/About';
import Sponsors from './Sponsors/Sponsors';
import Donate from './Donate/Donate';
import Fundraising from './Fundraising/Fundraising';
import Contact from './Contact/Contact';
import Footer from './Components/Footer/Footer';
import Seasons from './Seasons/Seasons';
import Calendar from './Calendar/Calendar';
import Drew3DPage from "./Seasons/3D_Pages/Drew3D";
import Shredder3DPage from "./Seasons/3D_Pages/Shredder3D";
import Twitch from './Twitch/Twitch';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Alumni from './Alumni/Alumni';

const Layout: React.FC = () => {

    const currentPath = window.location.pathname;

    const isTwitchPage = currentPath === "/twitch";

    const renderNavbar = !isTwitchPage && (
        <Navbar />
    );

    const renderFooter = !isTwitchPage && (
        <Footer />
    );


    return (
        <div>
            <Analytics />
            {renderNavbar}
            <Routes>
                <Route path="/" Component={Landing as React.ComponentType} />
                <Route path="/about" Component={About as React.ComponentType} />
                <Route path="/sponsors" Component={Sponsors as React.ComponentType} />
                <Route path="/donate" Component={Donate as React.ComponentType} />
                <Route path="/fundraising" Component={Fundraising as React.ComponentType} />
                <Route path="/contact" Component={Contact as React.ComponentType} />
                <Route path="/calendar" Component={Calendar as React.ComponentType} />
                <Route path="/seasons" Component={Seasons as React.ComponentType} />
                <Route path="/seasons/2023/3D" Component={Drew3DPage as React.ComponentType} />
                <Route path="/seasons/2024/3D" Component={Shredder3DPage as React.ComponentType} />
                <Route path="/twitch" Component={Twitch as React.ComponentType} />
                <Route path="/alumni" Component={Alumni as React.ComponentType} />
                <Route path="*" element={<div className="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color:"green"}}>404 Not Found</div>} />
            </Routes>
            <SpeedInsights />
            {renderFooter}
        </div>
    );
};

export default Layout;