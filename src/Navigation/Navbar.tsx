import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './yup.png';

const Navbar: React.FC = () => {

    return (
        <div className="nav">
            <div className="brand">
                <img className="brand-icon" src={logo} alt="Staley Millennium Falcons Logo"/>
                Millennium Falcons
            </div>
            <ul className="frosted-glass">
                <input type="checkbox" id="collapse"/>
                <label htmlFor="collapse"></label>
                <li id="current">
                    <NavLink to="/" className="stolfus">
                        Home
                    </NavLink>
                </li>
                <li id="current">
                    <NavLink to="/about" className="stolfus">
                        About
                    </NavLink>
                </li>
                <li id="current">
                    <NavLink to="/sponsors" className="stolfus">
                        Sponsors
                    </NavLink>
                </li>
                <li id="current">
                    <NavLink to="/fundraising" className="stolfus">
                        Fundraising
                    </NavLink>
                </li>
                <li id="current">
                    <NavLink to="/contact" className="stolfus">
                        Contact
                    </NavLink>
                </li>
                <li id="current">
                    <NavLink to="/calendar" className="stolfus">
                        Calendar
                    </NavLink>
                </li>
                <li id="current">
                    <NavLink to="/seasons" className="stolfus">
                        Seasons
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;