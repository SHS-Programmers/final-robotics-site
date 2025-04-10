'use client';

import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-green-500">About Us</h1>
            <p>
                Welcome to the About section of Staley Robotics! Here, you can learn more about our
                FIRST Robotics Competition (FRC) and FIRST Tech Challenge (FTC) teams, their goals,
                and what makes us unique.
            </p>
            <p>
                Explore our programs:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <Link
                        href="/about/frc"
                        className="text-green-500 underline hover:text-green-300"
                    >
                        Learn about Staley’s Millennium Falcons, our High School FIRST Robotics Competition Team (4959)
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about/ftc"
                        className="text-green-500 underline hover:text-green-300"
                    >
                        Learn about New Mark’s Hurricane’s, our Middle School feeder program FIRST Tech Challenge Team (26467)
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default About;
