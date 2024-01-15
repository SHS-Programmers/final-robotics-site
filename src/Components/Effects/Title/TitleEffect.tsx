// Credit to Claire Larsen for the original code that this effect is based off of.
import React from 'react';
import './TitleEffect.css';

interface TitleEffectProps {
    color: string
    text: string;
}

const TitleEffect: React.FC<TitleEffectProps> = ({ color, text }) => {
    return (
        <div className="container">
            <svg viewBox="0 0 350 200" style={{ position: "relative", width: "100%", height: "50vh" }} className="svg">
                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="80%">
                        {text}
                    </text>
                </symbol>

                <g className="g-ants">
                    <use xlinkHref="#s-text" className="text-copy"
                         style={{stroke: color, animationDelay: '0s'}}></use>
                    <use xlinkHref="#s-text" className="text-copy"
                         style={{stroke: color, animationDelay: '1s'}}></use>
                    <use xlinkHref="#s-text" className="text-copy"
                         style={{stroke: color, animationDelay: '2s'}}></use>
                    <use xlinkHref="#s-text" className="text-copy"
                         style={{stroke: color, animationDelay: '3s'}}></use>
                    <use xlinkHref="#s-text" className="text-copy"
                         style={{stroke: color, animationDelay: '4s'}}></use>
                </g>
            </svg>
        </div>
    );
};

export default TitleEffect;