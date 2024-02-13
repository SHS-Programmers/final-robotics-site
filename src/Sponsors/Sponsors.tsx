import React from 'react';
import "./Sponsors.css"
const Sponsors = () => {
    return (
        <div className="center adjust">
            <div className="frosted-glass frost-alt Font Left">
                <h2 className="heading">Sponsors</h2>
                <strong className="Font">
                    Thank you to our wonderful sponsors. Sponsors are those who help our team financially and by
                    mentoring the team. We could not be successful without them.
                </strong>
                <p>
                    <br/>
                    We have four different levels of contribution to give our sponsors distinction for their support.
                    <br/><br/>
                    Those four levels are:
                    <menu className="Font left">
                        <li className="Font">
                            $250 - Bronze, your name is listed on our website's sponsors page.
                        </li>
                        <li className="Font">
                            $500 - Silver, your logo and a link to your website are listed on our website's sponsors
                            page.
                        </li>
                        <li className="Font">
                            $1000 - Gold, a designed plaque, our robot displays your logo, and all Silver/Bronze
                            rewards.
                        </li>
                        <li className="Font">
                            $2000 - Platinum, your name is announced with our robot at competitions, and all
                            Gold/Silver/Bronze rewards.
                        </li>
                    </menu>
                </p>
            </div>
            <div className="wrapper">
                <div className="frosted-glass frost-alt platinum">
                    <h2 className="heading">Platinum</h2>
                    <img src={"./Cat.svg"} alt={"CAT Casey Behringer Logo"} />
                    <a href={"https://www.cat.com/en_US.html"} style={{color: "green", textDecoration: "underline"}}>Cat.com Website</a>
                    <img src={"./Wiz-Logo.svg"} alt={"Wiz.io Logo"}/>
                    <a href={"https://www.wiz.io/"} style={{color: "green", textDecoration: "underline"}}>Wiz.io
                        Website</a>
                </div>
                <div className="frosted-glass frost-alt gold">
                    <h2 className="heading">Gold</h2>
                    <img src={"./Alice.svg"} alt={"Alice Scoopers Logo"} />
                    <a href={"https://www.alicescooperskc.com/"} style={{color: "green", textDecoration: "underline"}}>Alice Scooper's Website</a>
                </div>
                <div className="frosted-glass frost-alt silver">
                    <h2 className="heading">Silver</h2>
                    <img src={"./NKCSCHOOLS.svg"} alt={"NKC Schools Logo"} />
                    <a href={"https://www.nkcschools.org/"} style={{color: "green", textDecoration: "underline"}}>North Kansas City Website</a>
                    <img src={"./KCStem.svg"} alt={"KC Stem Alliance Logo"} />
                    <a href={"https://www.kcstem.org/"} style={{color: "green", textDecoration: "underline"}}>KC Stem Alliance Website</a>
                </div>
                <div className="frosted-glass frost-alt bronze">
                    <h2 className="heading">Bronze</h2>
                    <img src={"./Microsoft Logo.svg"} alt={"Microsoft Tyler Rindels Logo"} />
                </div>
            </div>
            <div className="frosted-glass spread center">
                <p>A very special thanks goes to the <strong>Behringer</strong> and <strong>Koontz</strong> families for their hard work and support!</p>
            </div>
        </div>
    );
};

export default Sponsors;