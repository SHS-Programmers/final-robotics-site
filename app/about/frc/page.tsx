'use client';

import React from 'react';

const FRC: React.FC = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-green-500">MISSION STATEMENT</h2>
            <div>
                <p>
                    Staley High School Robotics is working to provide students with the opportunity to
                    achieve success as a team, develop leadership skills, and teach gracious professionalism.
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-green-400">
                <a
                    href="https://www.firstinspires.org/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-green-300"
                >
                    What is FIRST?
                </a>
            </h2>
            <div>
                <p>
                    The FIRST Robotics Competition pairs high school students with adult mentors (primarily
                    engineers and teachers) to design and build robots that compete against one another in this
                    high-energy “Varsity Sport for the Mind™”. Each year at the Kickoff in January, a new, challenging
                    game is introduced. These exciting competitions combine the practical application of science and
                    technology with the fun, intense energy and excitement of a championship-sporting event.
                </p>
                <p>
                    Teams are encouraged to display Gracious Professionalism® and to cooperate while competing –
                    known as Coopertition™. Remote-controlled robots, piloted by students and cheered on by thousands of fans,
                    go head-to-head in short games to earn points during a two-minute round.
                </p>
            </div>
        </div>
    );
};

export default FRC;
