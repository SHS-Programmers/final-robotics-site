import React from 'react';
import "./Twitch.css"
const Twitch = () => {
    return (
        <div className="twitch">
            <iframe
                title="Twitch Stream"
                src="https://player.twitch.tv/?video=2024626809&parent=www.staleyrobotics.com">
                frameborder="0"
                scrolling="no"
                height="100%"
                width="100%"
                autoplay=true
            </iframe>
        </div>
    );
};

export default Twitch;