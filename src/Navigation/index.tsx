import React, {useEffect, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import './styles.css';
import Brand from "../Util/Brand";
import FrostedGlass from "../Util/Effects/FrostedGlass";
import Arrow, {Direction} from "../Util/Effects/Arrow";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    useEffect(() => {
        const content = document.getElementById("content");
        if (content === null) return;
        content.addEventListener("scroll", () => {
            setDrift(content.scrollTop - 45 - window.outerHeight / 10);
        });
    })

    const [drift, setDrift] = useState(0);

    return (
        <div className="nav">
            <Link to="/" style={{ flexGrow: 1, margin: "20px 20px 25px 34px", position:"absolute", opacity: (drift <= 0 && useLocation().pathname === "/") ? 0 : 1, transition: "opacity 100ms ease" }}>
                <Brand />
            </Link>
            <ul style={{ flexShrink: 1 }}>
                <FrostedGlass>
                    <input type="checkbox" id="collapse"/>
                    <label htmlFor="collapse"></label>
                    <li id="current">
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li id="current">
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li id="current">
                        <NavLink to="/sponsors">
                            Sponsors
                        </NavLink>
                    </li>
                    <li id="current">
                        <NavLink to="/fundraising">
                            Fundraising
                        </NavLink>
                    </li>
                    <li id="current">
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li id="current">
                        <NavLink to="/calendar">
                            Calendar
                        </NavLink>
                    </li>
                    <li id="current">
                        <NavLink to="/seasons">
                            Seasons
                        </NavLink>
                    </li>
                </FrostedGlass>
            </ul>
        </div>
    );
}
