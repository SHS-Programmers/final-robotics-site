import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Landing from './Landing/Landing';
import About from './About/About';
import Sponsors from './Sponsors/Sponsors';
import Test from './Test/Test';
import Donate from './Donate/Donate';
import Fundraising from './Fundraising/Fundraising';
import Contact from './Contact/Contact';
import Footer from './Components/Footer/Footer';
import Robots from './Robots/Robots';
import Calendar from './Calendar/Calendar';
import { SpeedInsights } from "@vercel/speed-insights/next"

const Layout: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" Component={Landing as React.ComponentType} />
                <Route path="/about" Component={About as React.ComponentType} />
                <Route path="/sponsors" Component={Sponsors as React.ComponentType} />
                <Route path="/test" Component={Test as React.ComponentType} />
                <Route path="/donate" Component={Donate as React.ComponentType} />
                <Route path="/fundraising" Component={Fundraising as React.ComponentType} />
                <Route path="/contact" Component={Contact as React.ComponentType} />
                <Route path="/calendar" Component={Calendar as React.ComponentType} />
                <Route path="/robots" Component={Robots as React.ComponentType} />
                <Route path="*" element={<div className="center" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', color:"green"}}>404 Not Found</div>} />
            </Routes>
            <SpeedInsights />
            <Footer />
        </div>
    );
};

export default Layout;