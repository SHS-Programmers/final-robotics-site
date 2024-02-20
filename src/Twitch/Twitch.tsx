import React from 'react';
import { IframeHTMLAttributes } from 'react';
import "./Twitch.css"
const Twitch = () => {
    return (
        <div className="twitch">
            <iframe
                title="FRC Broadcast"
                src="https://player.twitch.tv/?channel=firstinspires11&parent=localhost&parent=staleyrobotics.com&muted=true"
                width="1920"
                height="1080"          
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};

export default Twitch;