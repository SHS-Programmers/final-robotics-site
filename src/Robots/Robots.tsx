/* eslint-disable */
import React from 'react';
import '../App.css';
import './Robots.css';
import Element3D from "../Components/3D/Element3D";
// import "../../public/Rapid-React.webp"

function Robots() {
    return (
        <div className="adjust">
            <div className="center">
                <div className="frosted-glass">

                    <h2 className="heading left">2024 - Crescendo</h2>

                    <p className="left"><strong>Robot Name: TBA</strong></p>

                    <p className="left">The goal of the <a href={"https://www.youtube.com/watch?v=GP7oNte1q0U"}
                                                           style={{color: "green", textDecoration: "underline"}}>2024
                        Crescendo game</a> has yet to be announced.</p>
                </div>
            </div>
            <div className="" style={{position: "relative", width: "100%", height: "75vh", backgroundColor:"#343434", borderRadius: "10px"}}>
                <Element3D/>
            </div>
            <div className="center">
                <div className="frosted-glass">

                    <h2 className="heading left">2023 - CHARGED UP</h2>

                    <p className="left"><strong>Robot Name: Drew  </strong>(Above in 3D)</p>

                    <p className="left">The goal of the <a href={"https://www.youtube.com/watch?v=0zpflsYc4PA"}
                                                           style={{color: "green", textDecoration: "underline"}}>2023
                        Charged Up game</a> is to score cubes and cones into their
                        respective grids to support their 'community', the community is an alliance's home base, meaning
                        no bot from another alliance can enter their community. The robots goal is to then dock on
                        charge stations in their community to earn points for their alliance by balancing the
                        station.</p>
                </div>
            </div>
            <div className="center space" style={{position: "relative", width: "100%", height: "75vh"}}>
                <img src={"./Rapid-React.webp"} alt={"2022 Rapid React Robot & Partial Team Photo"}></img>
            </div>
            <div className="center">
                <div className="frosted-glass">

                    <h2 className="heading left">2022 - Rapid React</h2>

                    <p className="left"><strong>Robot Name: Unnamed  </strong>(Above Image)</p>

                    <p className="left">The goal of the <a href={"https://www.youtube.com/watch?v=LgniEjI9cCM"}
                                                           style={{color: "green", textDecoration: "underline"}}>2022
                        Rapid React game</a> is to score the cargo balls into the lower and upper sections of the hub,
                        the teams are able to score additional points by climbing the hanger rungs to the highest their
                        robot can achieve. We achieved an outstanding position of 3rd place that year, an incredible
                        position as a rookie team.</p>
                </div>
            </div>
        </div>
    );
}

export default Robots;