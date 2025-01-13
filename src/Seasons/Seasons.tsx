/* eslint-disable */
import React from 'react';
import '../App.css';
import './Seasons.css';
import ImageSlider from "../Components/Effects/Slideshow/ImageSlider";

const ShredderImages = [
    "./ShredderPhotos/S1.JPG",
    "./ShredderPhotos/S2.JPG",
    "./ShredderPhotos/S3.JPG",
    "./ShredderPhotos/S4.JPG",
    "./ShredderPhotos/S5.JPG",
    "./ShredderPhotos/S6.JPG",
    "./ShredderPhotos/S7.JPG",
]

function Seasons() {
    return (
        <div className="adjust">
            <div className="center">
                <div className="frosted-glass">

                    <h2 className="heading left">2025 - ReefScape</h2>
                    <h3 className="left">*CURRENT SEASON*</h3>

                    <p className="left"><strong>Robot Name: Undecided</strong>
                        {/*(*/}
                        {/*<a*/}
                        {/*    href={"/seasons/2024/3D"} style={{color: "green", textDecoration: "underline"}}>VIEW IN 3D*/}
                        {/*</a>*/}
                        {/*)*/}
                    </p>

                    <p className="left">
                        The goal of the <a href={"https://www.youtube.com/watch?v=YWbxcjlY9JY"}
                                           style={{color: "green", textDecoration: "underline"}}>
                        2025 ReefScape game
                    </a> is to score coral (large sections of PVC pipe) onto the reef (a large structure in the center
                        of each alliance's side of the field). The coral can be scored in various ways, such as placing
                        it on the reef, hanging it on the reef, or stacking it on top of other coral. Also, teams must
                        remove algae (over-sized playground balls) from the reef and place them in the barge (a
                        structure with a net in the center of the field). These algae can be scored either by direct
                        robot scoring into the net, or by placing them in processors that allow human players to score
                        them. At the end of the game, teams must climb onto
                        the barge's hanging cages to earn additional points.
                        <br/>
                        <br/>
                        This year we will compete at the Heartland Regional (March 19-22), the Iowa Regional (March 26-29), and the Mo-Kan State Championship (TBD).
                    </p>
                </div>
            </div>
            <div className={"image"}>
                {/*    Image placeholder indicating that we are too early in the season to have in photos of our robot*/}
                <h1 className={"center"} style={{"color": "white"}}>Photos Coming Soon!</h1>

            </div>
            <div className="center">
                <div className="frosted-glass">

                    <h2 className="heading left">2024 - Crescendo</h2>

                    <p className="left"><strong>Robot Name: Shredder</strong>
                        (
                        <a
                            href={"/seasons/2024/3D"} style={{color: "green", textDecoration: "underline"}}>VIEW IN 3D
                        </a>
                        )
                    </p>

                    <p className="left">
                        The goal of the <a href={"https://www.youtube.com/watch?v=9keeDyFxzY4"}
                                           style={{color: "green", textDecoration: "underline"}}>
                        2024 Crescendo game
                    </a> is to launch or place foam rings called 'notes' into various apertures around the
                        field. At the end of the game, teams must climb onto a chain while a human player throws striped
                        rings (high notes) to achieve point bonuses.
                        <br/>
                        <br/>
                        This year we competed at the Greater Kansas City Regional and the Heartland Regional. We were
                        able to successfully implement a fully functional swerve drive system, which allowed us to move
                        in any direction and rotate freely while doing so. Our swerve drive gave us a definite edge over
                        other teams. Our robot also featured advanced path planning capabilities that allowed some
                        tele-operated game play to be automated, as well as improving our autonomous capabilities. The
                        robot itself consisted of a conveyor belt system that could intake the rings, and a launching
                        mechanism that could shoot the rings into the goals. The launching mechanism was rotatable,
                        which allowed us to shoot the rings into the goals at various angles, greatly increasing our
                        versatility. Our climbing ability was functional, but minimal, as our main strategy for the
                        season was to focus on scoring points with the notes.
                    </p>
                </div>
            </div>
            <div className={"image"}>
                <ImageSlider images={ShredderImages} interval={4500}/>
            </div>
            <div className="center">
                <div className="frosted-glass">

                    <h2 className="heading left">2023 - CHARGED UP</h2>

                    <p className="left">
                        <strong>Robot Name: Drew </strong>
                        (
                        <a
                            href={"/seasons/2023/3D"} style={{color: "green", textDecoration: "underline"}}>VIEW IN 3D
                        </a>
                        )
                    </p>

                    <p className="left">The goal of the <a href={"https://www.youtube.com/watch?v=0zpflsYc4PA"}
                                                           style={{color: "green", textDecoration: "underline"}}>2023
                        Charged Up game</a> is to score cubes and cones into their
                        respective grids to support their 'community', the community is an alliance's home base, meaning
                        no bot from another alliance can enter their community. The robots goal is to then dock on
                        charge stations in their community to earn points for their alliance by balancing the
                        station.
                        <br/>
                        <br/>
                        We competed at the Arkansas Regional, the Greater Kansas City Regional, and the Heartland
                        Regional. This year was our first usage of the Swerve Drive locomotion method. Although this
                        method is very powerful, we had a lot of issues at the beginning of the season, but we were able
                        to overcome them and end up with a decent season. This robot ended up being our tallest robot.
                        We used pneumatic systems to open and close our claw. Our strategy was to score as many points
                        as possible by scoring cubes and cones into the grids, and working well with other teams in our
                        alliance. During this season we earned the Judges Award because of how professionally our robot
                        looked. We spray painted each part very carefully —to the point where they appeared powder
                        coated—
                        and had wonderful cable management. We also fit the majority of the components in the base of
                        the robot, which not only looked very clean, but also lowered the center of mass of the robot
                        down to make it more stable.
                    </p>
                </div>
            </div>
            <div className="center">
                <img src={"./Drew2D.png"} alt={"2023 Charged Up Robot"}></img>
            </div>
            <div className="center">
                <div className="frosted-glass">

                    <h2 className="heading left">2022 - Rapid React</h2>

                    <p className="left"><strong>Robot Name: Shawn </strong>(Below Image)</p>

                    <p className="left">The goal of the <a href={"https://www.youtube.com/watch?v=LgniEjI9cCM"}
                                                           style={{color: "green", textDecoration: "underline"}}>2022
                        Rapid React game</a> is to score the cargo balls into the lower and upper sections of the hub,
                        the teams are able to score additional points by climbing the hanger rungs to the highest their
                        robot can achieve. We achieved an outstanding position of 3rd place that year, an incredible
                        position as a rookie team.
                        <br/>
                        <br/>
                        Our robot this year was a simple design, but it was very effective. On the front end we had a
                        roller with eyelashes that spun around and enabled us to quickly pick up the ball. It would
                        bring it up the tower and into the flywheel launcher by using a pulley-belt system. Our
                        flywheel system enabled us to shoot the ball into the goal with a high degree of accuracy. We
                        also had the capability to shoot at different heights by adjusting the velocity of the flywheel.
                        We also had an arm that could extend and retract to allow us to climb the hanger rungs. These
                        robot features allowed us to score a lot of points and win many matches.
                    </p>
                </div>
            </div>
            <div className="center space" style={{position: "relative", width: "100%", height: "75vh"}}>
                <img src={"./Rapid-React.webp"} alt={"2022 Rapid React Robot & Partial Team Photo"}></img>
            </div>
        </div>
    );
}

export default Seasons;