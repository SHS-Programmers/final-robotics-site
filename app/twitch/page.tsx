import React from 'react';
import Head from 'next/head';

export default function Twitch() {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-transparent">
            <Head>
                <title>FRC Broadcast</title>
            </Head>
            <iframe
                title="FRC Broadcast"
                src="https://player.twitch.tv/?channel=firstinspires9&parent=localhost&parent=www.staleyrobotics.com&muted=true"
                className="w-full h-full border-0"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};