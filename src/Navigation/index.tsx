import React, {useEffect, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import './styles.css';
import Brand from "../Util/Brand";

export default () => {

    useEffect(() => {
        const content = document.getElementById("content");
        if (content === null) return;
        content.addEventListener("scroll", (event: Event) => {
            setDrift(content.scrollTop - 45 - window.outerHeight / 10);
        });
    })

    const [drift, setDrift] = useState(0);

    return (
        <div className="nav">
            <Link to="/" style={{ flexGrow: 1, margin: "25px 30px 25px 34px", position:"absolute", opacity: (drift >= 0 || useLocation().pathname !== "/") ? 1 : 0, transition: "opacity 250ms ease 100ms" }}>
                <Brand />
            </Link>
            <ul className="frosted-glass" style={{ flexShrink: 1 }}>
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
}
