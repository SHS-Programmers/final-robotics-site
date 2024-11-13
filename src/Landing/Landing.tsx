// src/components/Landing.js
import React, {useEffect} from 'react';
import '../App.css';
import './Landing.css';
import TitleEffect from "../Components/Effects/Title/TitleEffect";
import ImageSlider from "../Components/Effects/Slideshow/ImageSlider";

const images = [
    './slides/countdown.jpg',
    './slides/Team2324.jpg',
    './slides/Team2425.jpg',
]

function Landing() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Adjust `speedFactor` to control how fast the title scrolls compared to the rest
            const speedFactor = 1.2; // Experiment with this value
            const translateY = -scrollPosition * speedFactor;

            // Apply the transformation directly to the element
            const titleElement = document.querySelector('.title') as HTMLElement;
            if (titleElement) {
                titleElement.style.transform = `translateY(${translateY}px) translateX(50%)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="landing-container">
            <div className="parallax center bg">
                <ImageSlider images={images} interval={4000} />
                <div className="title">
                    <div className="frosted-glass contain">
                        <TitleEffect color1="var(--color-green)" color2="var(--color-black)" text="4959" />
                        <TeamInfo />
                    </div>
                </div>
            </div>
            <div className="content">
                <AboutSection />
            </div>
        </div>
    );
}

const TeamInfo = () => (
    <ul aria-label="Team Information">
        <li>🏷️ Millenium Falcons</li>
        <li>📍 Staley High School</li>
    </ul>
);

const AboutSection = () => (
    <div className="borderHomeInfo">
        <h1>About Us</h1>
        <p className="about-text">
            Staley Robotics, also known as the Millennium Falcons robotics team, is registered as team 4959 of FIRST
            Robotics. Since our founding in 2013, we have worked to develop a strong sense of community and form a basis
            for our team to continue to thrive and expand upon for years to come.
            <br/><br/>
            Over the past ten years, our team has made it to The FIRST World Robotics Championships, won multiple times
            at the Kansas City Regional, in 2015 we won the judges award, and in 2023 our head coach, Aaron Dalton,
            received the Woodie Flowers Award for his impact on our team. We hope to continue competing and building
            successful robots in years to come.
            <br/><br/>
            <a href="/seasons" className="about-link">Past robots and events.</a>
        </p>
    </div>
);

export default Landing;
