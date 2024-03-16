import React from 'react';
import "./Twitch.css"
const Twitch = () => {
    return (
        <div className="twitch">
            <iframe
                title="FRC Broadcast"
                src="https://player.twitch.tv/?channel=firstinspires4&parent=localhost&parent=www.staleyrobotics.com&muted=true"
                width="100%"
                height="100%"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};

export default Twitch;