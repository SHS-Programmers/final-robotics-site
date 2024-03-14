import React, {useEffect, useState} from 'react';
import './styles.css';
import backgroundManager from "../../Util/Background/BackgroundManager";
import Parallax from "../../Util/Effects/Parallax";
import Brand from "../../Util/Brand";
import TitleEffect from "../../Util/Effects/Title";
import FrostedGlass from "../../Util/Effects/FrostedGlass";
import {NavLink} from "react-router-dom";
import {default as Arrow, Direction} from "../../Util/Effects/Arrow";
import RobotOverview from "../Seasons/RobotOverview";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    useEffect(() => {
        const content = document.getElementById("content");
        if (content === null) return;
        content.addEventListener("scroll", () => {
            setBrandStick(content.scrollTop - 45 - window.outerHeight / 10);
        });
        setTimeout(() => {
            backgroundManager.inject([<Parallax img="/media/countdown.jpg"/>, <TitleEffect color="#008b0c" text="4959" />, <div className="page-dimmer" />]);
        }, 1);
        return () => {
            const css = `
                .injected-content {
                    display: none;
                }
            `;
            backgroundManager.inject([
                ...backgroundManager.rendered,
                <style>{ css }</style>
            ]);
        }
    });
    const [brandStick, setBrandStick] = useState(-45);
    return (
        <div className="landing" onScroll={(event) => setBrandStick(event.currentTarget.scrollTop)}>
            <div className="introduction card-stack">
                <div>
                    <Brand style={{zIndex: 1000, position: "sticky", top: "calc(-12px - 2rem)", opacity: (brandStick > 0) ? 0 : 1, transition: "opacity 100ms ease" }}/>
                    <ul className="overview-list">
                        <li>
                            <a href="https://www.thebluealliance.com/team/4959">
                                <FrostedGlass>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <path d="M31.09,12.24l.91-4.24h-6.71l1.1-8h-4.39l-1.1,8h-7.61l1.1-8h-4.39l-1.1,8H2.9l-.91,4.24h6.33l-1.03,7.52H.91l-.91,4.24h6.71l-1.1,8h4.39l1.1-8h7.61l-1.1,8h4.39l1.1-8h5.96l.91-4.24h-6.29l1.03-7.52h6.38ZM19.29,19.76h-7.61l1.03-7.52h7.61l-1.03,7.52Z"/>
                                    </svg>
                                    <span>4959</span>
                                </FrostedGlass>
                            </a>
                        </li>
                        <li>
                            <a href="https://maps.google.com/maps?ll=39.288314,-94.543852&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=1903684922458480890">
                                <FrostedGlass>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <g>
                                            <path d="M11.73,0C5.26,0,0,5.27,0,11.73c0,11.38,11.07,20.03,11.07,20.03.39.31.94.31,1.33,0,0,0,11.07-8.65,11.07-20.03,0-6.47-5.27-11.73-11.74-11.73ZM11.73,6.4c2.93,0,5.34,2.4,5.34,5.33,0,2.93-2.41,5.34-5.34,5.34s-5.33-2.4-5.33-5.34c0-2.93,2.4-5.33,5.33-5.33Z"/>
                                        </g>
                                    </svg>
                                    <span>Staley High School</span>
                                </FrostedGlass>
                            </a>
                        </li>
                    </ul>
                    <p style={{textAlign: "left", margin: "10px",lineHeight: "2em"}}>
                        Staley Robotics, also known as the Millennium Falcons robotics team, is registered as team
                        4959 of FIRST Robotics. Since our founding in 2013, we have worked to develop a strong sense of
                        community and form a basis for our team to continue to thrive and expand upon for years to come.
                        <br/><br/>
                        Over the past ten years, our team has made it to The FIRST World Robotics Championships, won
                        multiple times at the Kansas City Regional, in 2015 we won the judges award, and in 2023 our
                        head coach, Aaron Dalton, received the Woodie Flowers Award for his impact on our team.
                        We hope to continue competing and building successful robots in years to come.
                        <br/><br/>
                    </p>
                </div>
                <div>
                    <FrostedGlass>
                        <RobotOverview season={2024} />
                        {/*<NavLink style={{ margin: "5px" }} to={"/seasons"}>*/}
                        {/*    Past robots and events*/}
                        {/*    <Arrow direction={Direction.E} />*/}
                        {/*</NavLink>*/}
                    </FrostedGlass>
                </div>
            </div>
        </div>
    );
}
