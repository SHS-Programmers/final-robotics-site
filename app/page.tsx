'use client'
import React from "react";
import TitleImage from "@/app/components/Effects/Slideshow/TitleImage";

const images = [
    "/slides/Team2526.JPG",
    "/slides/countdown.JPG",
    "/slides/Team2324.JPG",
    "/slides/Team2425.jpg",
];

const Landing: React.FC = () => {
    return (
        <div className="relative overflow-hidden">
            <div
                className="relative bg-fixed bg-cover bg-center min-h-screen pt-0"
                style={{backgroundImage: "url('/path-to-bg.jpg')"}}
            >
                <TitleImage images={images} interval={4000}/>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-52 md:-translate-y-0 z-20">
                    <div
                        className="bg-gray-600 border-4 border-dashed border-green-400 p-6 md:p-12 rounded-xl flex flex-col items-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-green-500 drop-shadow-[0_0_10px_rgba(0,255,0,0.7)] animate-pulse tracking-wide">
                            NEW SHIRTS!
                        </h1>
                        <h3 className="text-base md:text-lg font-medium text-gray-200 mt-2">
                            Only available for a limited time!
                        </h3>
                        <a
                            className="text-base md:text-lg font-medium text-gray-200 bg-green-500 p-2 md:p-4 rounded-xl mt-6"
                            href="https://staleyrobotics25.itemorder.com/"
                        >
                            Order Now!
                        </a>
                    </div>
                </div>
                <div
                    className="absolute bottom-12 left-4 md:bottom-28 md:left-8 z-20 transition-transform duration-300">
                    <div className="frosted-glass p-4 md:p-6 rounded-xl inline-block">
                        <h1 className="text-4xl md:text-8xl font-extrabold text-green-500 drop-shadow-[0_0_10px_rgba(0,255,0,0.7)] animate-pulse tracking-wide">
                            4959
                        </h1>
                        <p className="text-sm md:text-lg font-medium text-gray-200 mt-2">
                            Millennium Falcons Robotics
                        </p>
                    </div>
                </div>
            </div>
            <div className="content relative z-10">
                <AboutSection/>
            </div>
        </div>
    );
};

const AboutSection: React.FC = () => (
    <div
        className="bg-gray-200/20 backdrop-blur-md rounded-2xl p-4 md:p-6 mx-4 my-6 max-h-[calc(100vh-40px)] overflow-y-auto shadow-md"
    >
        <h1 className="text-xl md:text-2xl font-bold mb-4">About Us</h1>
        <p className="text-sm md:text-white">
            Staley Robotics, also known as the Millennium Falcons robotics team, is registered as team 4959 of FIRST
            Robotics. Since our founding in 2013, we have worked to develop a strong sense of community and form a basis
            for our team to continue to thrive and expand upon for years to come.
            <br/>
            <br/>
            Over the past ten years, our team has made it to The FIRST World Robotics Championships, won multiple times
            at the Kansas City Regional, in 2015 we won the judges award, and in 2023 our then head coach, Aaron Dalton,
            received the Woodie Flowers Award for his impact on our team. We hope to continue competing and building
            successful robots in years to come.
            <br/>
            <br/>
            <a href="/seasons" className="text-green-600 underline hover:text-green-800">
                Past robots and events
            </a>
        </p>
    </div>
);

export default Landing;