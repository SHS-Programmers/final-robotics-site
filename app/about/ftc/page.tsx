'use client';

import React from 'react';
import ImageSlider from "@/app/components/Effects/Slideshow/ImageSlider";

const FTC: React.FC = () => {

    const images = [
        "/FTC/FTC1.jpg",
        "/FTC/FTC2.JPG",
        "/FTC/FTC3.JPG",
        "/FTC/FTC4.jpg",
        "/FTC/FTC5.jpg",
        "/FTC/FTC6.jpg",
        "/FTC/FTC7.jpg",
    ]

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-500">FTC #26467 Hurricanes</h2>
            <p>
                New Mark&#39;s freshly established FIRST Tech Challenge team has officially begun their season for the
                2024-2025 school year! Staley Robotics has dedicated their practice sessions to support and mentor these
                aspiring engineers during their competitive journey. The Hurricanes at New Mark are committed to
                embodying their school&#39;s mission, which is to:
            </p>
            <ul className="list-disc list-inside">
                <li>Empower students to embrace their self worth and the value of others</li>
                <li>Inspire students to channel their unique abilities and skills</li>
                <li>Strengthen the connections of the New Mark community</li>
            </ul>
            <br/>
            <div className={"w-full min-h-60"}>
                <ImageSlider images={images}/>
            </div>
        </div>
    );
};

export default FTC;
