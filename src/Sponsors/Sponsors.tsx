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
                            page, and your logo is printed on our team shirt.
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
                    <img src={"./Labconco.svg"} alt={"Labconco Logo"} style={{maxWidth: 500}}/>
                    <br/>
                    <a href={"https://www.labconco.com/"} style={{color: "green", textDecoration: "underline"}}>Labconco
                        Website</a>
                    <br/>
                    <img src={"./Cat.svg"} alt={"CAT Casey Behringer Logo"}/>
                    <br/>
                    <a href={"https://www.cat.com/en_US.html"} style={{color: "green", textDecoration: "underline"}}>Cat.com
                        Website</a>
                    <br/>
                    <img src={"./Wiz-Logo.svg"} alt={"Wiz.io Logo"}/>
                    <br/>
                    <a href={"https://www.wiz.io/"} style={{color: "green", textDecoration: "underline"}}>Wiz.io
                        Website</a>
                    <br/>
                    <img src={"./NKCSCHOOLS.svg"} alt={"NKC Schools Logo"}/>
                    <br/>

                    <a href={"https://www.nkcschools.org/"} style={{color: "green", textDecoration: "underline"}}>North
                        Kansas City School District Website</a>
                    <br/>
                    <img src={"./ArgosyFoundation.svg"} alt={"Argosy Foundation Logo"} style={{maxWidth: 603}}/>
                    <br/>
                    <a href={"https://www.argosyfoundation.org/"} style={{color: "green", textDecoration: "underline"}}>Argosy
                        Foundation Website</a>
                </div>
                <div className="frosted-glass frost-alt gold">
                    <h2 className="heading">Gold</h2>
                    <img src={"./Alice.svg"} alt={"Alice Scoopers Logo"}/>
                    <a href={"https://www.alicescooperskc.com/"} style={{color: "green", textDecoration: "underline"}}>Alice
                        Scooper's Website</a>
                </div>
                <div className="frosted-glass frost-alt silver">
                    <h2 className="heading">Silver</h2>
                    <img src={"./KCStem.svg"} alt={"KC Stem Alliance Logo"}/>
                    <a href={"https://www.kcstem.org/"} style={{color: "green", textDecoration: "underline"}}>KC Stem
                        Alliance Website</a>
                </div>
                <div className="frosted-glass frost-alt bronze">
                    <h2 className="heading">Bronze</h2>
                </div>
            </div>
            <div className="frosted-glass spread center">
                <p>A very special thanks goes to the <strong>Rindels</strong> and <strong>Koontz</strong> families for
                    their hard work and support!
                </p>
                <hr/>
                <p>
                    Tyler Rindels is our programming mentor. He is an amazing coach who has helped us learn how to code our robot with clean, quick, and modern coding practices. He has been a mentor for the team since 2023, and has been a huge help to the team.
                </p>
                <hr/>
                <p>
                    The Koontz family has been a huge help to the team. They have helped us with our robot design and development, and have been our representatives to our school district for funding and support.
                </p>
            </div>
        </div>
    );
};

export default Sponsors;