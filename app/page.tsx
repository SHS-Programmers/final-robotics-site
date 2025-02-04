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
                className="relative bg-fixed bg-cover bg-center min-h-screen"
                style={{ backgroundImage: "url('/path-to-bg.jpg')" }}
            >
                <TitleImage images={images} interval={4000} />
                <div
                    className="absolute bottom-28 left-8 z-20 transition-transform duration-300"
                >
                    <div className="frosted-glass p-6 rounded-xl inline-block">
                        <h1 className="text-8xl font-extrabold text-green-500 drop-shadow-[0_0_10px_rgba(0,255,0,0.7)] animate-pulse tracking-wide">
                            4959
                        </h1>
                        <p className="text-lg font-medium text-gray-200 mt-2">
                            Millennium Falcons Robotics
                        </p>
                    </div>
                </div>
            </div>
            <div className="content relative z-10">
                <AboutSection />
            </div>
        </div>
    );
};

const AboutSection: React.FC = () => (
    <div
        className="bg-gray-200/20 backdrop-blur-md rounded-2xl p-6 mx-4 my-6 max-h-[calc(100vh-40px)] overflow-y-auto shadow-md"
    >
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="text-white">
            Staley Robotics, also known as the Millennium Falcons robotics team, is registered as team 4959 of FIRST
            Robotics. Since our founding in 2013, we have worked to develop a strong sense of community and form a basis
            for our team to continue to thrive and expand upon for years to come.
            <br />
            <br />
            Over the past ten years, our team has made it to The FIRST World Robotics Championships, won multiple times
            at the Kansas City Regional, in 2015 we won the judges award, and in 2023 our then head coach, Aaron Dalton,
            received the Woodie Flowers Award for his impact on our team. We hope to continue competing and building
            successful robots in years to come.
            <br />
            <br />
            <a href="/seasons" className="text-green-600 underline hover:text-green-800">
                Past robots and events
            </a>
        </p>
    </div>
);

export default Landing;
