import React from 'react';
import '../App.css';
import './Landing.css';
import TitleEffect from "../Components/Effects/Title/TitleEffect";

function Landing() {
    return (
            <div className="landing-container">
                <div className="parallax center bg">
                    <div className="title">
                        <div className="frosted-glass contain">
                            <TitleEffect color1={"#288c00"} color2={"#000000"} text={"4959"}/>
                            <ul>
                                <li>🏷️ Millenium Falcons</li>
                                <li>📍 Staley High School</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="borderHomeInfo">
                        <h1>About Us</h1>
                        <p style={{textAlign: "left", fontFamily:"sans-serif"}}>
                            Staley Robotics, also known as the Millennium Falcons robotics team, is registered as team
                            4959
                            of FIRST
                            Robotics. Since our founding in 2013, we have worked to develop a strong sense of community
                            and
                            form a
                            basis for our team to continue to thrive and expand upon for years to come. <br/><br/>
                            Over the past ten years, our team has made it to The FIRST World Robotics Championships, won
                            multiple
                            times at the Kansas City Regional, in 2015 we won the judges award,
                            and in 2023 our head coach, Aaron Dalton, received the Woodie Flowers Award for his impact
                            on our team.
                            We hope to continue competing and building successful robots in years to come.<br/><br/>
                            <a href={"/seasons"} style={{color:"Green",textDecoration:"underline"}}>Past robots and events.</a> <br/>
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default Landing;
