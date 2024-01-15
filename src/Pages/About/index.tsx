import React from 'react';
import './styles.css';

export default () => {
    return (

        <div className="center adjust">
            <div className="frosted-glass">
                <h2 className={"heading"}>MISSION STATEMENT</h2>
                <div className={"text main-body mission"}>
                    <p>Staley High School Robotics is working to provide students with the opportunity to
                        achieve success as a team, develop leadership skills, and teach gracious professionalism.
                    </p>
                </div>
                <h2 className={"body-heading"}><a href={"https://www.firstinspires.org/about"} style={{color:"Green",textDecoration:"underline"}}>What is first?</a></h2>
                <div className={"text main-body body"}>
                    <p>
                        The FIRST Robotics Competition pairs high school students with adult mentors (primarily
                    engineers and teachers) to design and build robots that compete against one another in this
                    high energy “Varsity Sport for the Mind™”. Each year at the Kickoff in January, a new, challenging
                    game is introduced. These exciting competitions combine the practical application of science and
                    technology with the fun, intense energy and excitement of a championship-sporting event. Teams are
                    encouraged to display Gracious Professionalism ® and to cooperate while competing – known as
                        Cooperation™.
                    </p>
                    <p>
                        The FIRST Robotics Competition combines the excitement of a varsity sport with hands-on
                        training in science and technology to help high school students discover how rewarding a
                        career in engineering or technology can be. Remote-controlled robots, piloted by students
                        and cheered on by thousands of screaming fans, go head-to-head in short games on the floor
                        of a sports arena, battling it out to earn points during a two-minute round.
                    </p>
                </div>
            </div>
        </div>
    );
};