import React, {useEffect, useState} from 'react';
import './styles.css';
import backgroundManager from "../../Util/Background/BackgroundManager";
import Parallax from "../../Util/Effects/Parallax";
import Brand from "../../Util/Brand";
import TitleEffect from "../../Util/Effects/Title";

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
        });
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
        <div onScroll={(event) => setBrandStick(event.currentTarget.scrollTop)}>
            <div className="introduction card-stack">
                <div>
                    <Brand style={{zIndex: 1000, position: "sticky", marginLeft: "39px", top: "calc(-9px - 1.5em)",  opacity: (brandStick > 0) ? 0 : 1, transition: "opacity 100ms ease" }}/>
                    <ul className="overview-list">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                <text style={{fontSize: "32px"}} transform="translate(0 25)">
                                    <tspan x="0" y="0">#</tspan>
                                </text>
                            </svg>
                            <a href="https://www.thebluealliance.com/team/4959">4959</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                <path
                                    d="M9.5,0C4.26,0-.29,4.26.01,9.49c.5,8.49,8.99,14.48,9.49,14.48s8.99-5.99,9.49-14.48C19.29,4.26,14.74,0,9.5,0ZM9.5,14.38c-2.98,0-5.39-2.41-5.39-5.39s2.41-5.39,5.39-5.39,5.39,2.41,5.39,5.39-2.41,5.39-5.39,5.39Z"/>
                            </svg>
                            Staley High School
                        </li>
                    </ul>
                    <p style={{textAlign: "left", margin: "25px", lineHeight: "30px"}}>
                        Staley Robotics, also known as the Millennium Falcons robotics team, is registered as
                        team
                        4959
                        of FIRST
                        Robotics. Since our founding in 2013, we have worked to develop a strong sense of
                        community
                        and
                        form a
                        basis for our team to continue to thrive and expand upon for years to come. <br/><br/>
                        Over the past ten years, our team has made it to The FIRST World Robotics Championships,
                        won
                        multiple
                        times at the Kansas City Regional, in 2015 we won the judges award,
                        and in 2023 our head coach, Aaron Dalton, received the Woodie Flowers Award for his
                        impact
                        on our team.
                        We hope to continue competing and building successful robots in years to come.<br/><br/>
                        <a href={"/seasons"} style={{color: "Green", textDecoration: "underline"}}>Past robots
                            and events.</a><br/>
                    </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}
