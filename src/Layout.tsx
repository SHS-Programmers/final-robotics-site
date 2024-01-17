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
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const Layout: React.FC = () => {
    return (
        <div>
            <Analytics />
            <Navbar />
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
                <Route path="*" element={<div className="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color:"green"}}>404 Not Found</div>} />
            </Routes>
            <SpeedInsights />
            <Footer />
        </div>
    );
};

export default Layout;