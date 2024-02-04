import React from 'react';
import './styles.css';
import Scene3D from "../../Util/Effects/3D";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="adjust">
            <div className="center">
                <div className="frosted-glass" style={{marginBottom:"50px"}}>

                    <h2 className="heading left">2024 - Crescendo</h2>

                    <p className="left"><strong>Robot Name: TBA</strong></p>

                    <p className="left">The goal of the <a href={"https://www.youtube.com/watch?v=9keeDyFxzY4"}
                                                           style={{color: "green", textDecoration: "underline"}}>2024
                        Crescendo game</a> is to launch or place foam rings called 'notes' into various apertures around the field. At the end of the game, teams must climb onto a chain while a human player throws striped rings (high notes) to achieve point bonuses.</p>
                </div>
            </div>
            <div className="" style={{position: "relative", width: "100%", height: "75vh", backgroundColor:"#0000", borderRadius: "10px"}}>
                <Scene3D glb="/media/seasons/2023/model.glb" />
            </div>
            <div className="center">
                <div className="frosted-glass">

                    <h2 className="heading left">2023 - CHARGED UP</h2>

                    <p className="left">
                        <strong>Robot Name: Drew </strong>
                        (
                        <a
                            href={"/seasons/2023/3D"} style={{color:"green", textDecoration:"underline"}}>VIEW IN 3D
                        </a>
                        )
                    </p>

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
                <img src={"./01.webp"} alt={"2022 Rapid React Robot & Partial Team"}></img>
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