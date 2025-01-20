import React from 'react';
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import {SpeedInsights} from "@vercel/speed-insights/react";
import {Analytics} from "@vercel/analytics/react";
import "./globals.css";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Staley Robotics",
    description: "The official website of Staley Robotics, FRC Team #4959",
};



export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en">
        <body
            className={`antialiased`}
        >
        <div>
            <Analytics/>
            <NavBar/>
            <div className={"pt-20"}>
            {children}
            </div>

            <SpeedInsights/>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
