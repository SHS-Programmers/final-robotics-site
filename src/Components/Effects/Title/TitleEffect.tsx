// Credit to Claire Larsen for the original code that this effect is based off of.
import React from 'react';
import './TitleEffect.css';

interface TitleEffectProps {
    color1: string;
    color2: string;
    text: string;
}

const TitleEffect: React.FC<TitleEffectProps> = ({ color1, color2, text }) => {
    return (
        <div className="container">
            <svg viewBox="0 0 300 200" style={{ position: "relative", width: "100%", height: "45vh" }} className="svg">
                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="80%">
                        {text}
                    </text>
                </symbol>

                <g className="g-ants">
                    <use xlinkHref="#s-text" className="text-copy"
                         style={{stroke: color1, animationDelay: '1.9s'}}></use>
                    <use xlinkHref="#s-text" className="text-copy"
                         style={{stroke: color2, animationDelay: '2s'}}></use>
                    <use xlinkHref="#s-text" className="text-copy color3" style={{animationDelay: '3s'}}></use>
                    <use xlinkHref="#s-text" className="text-copy color4" style={{animationDelay: '4s'}}></use>
                    <use xlinkHref="#s-text" className="text-copy color5" style={{animationDelay: '5s'}}></use>
                    <use xlinkHref="#s-text" className="text-copy color6" style={{animationDelay: '6s'}}></use>
                    <use xlinkHref="#s-text" className="text-copy color7" style={{animationDelay: '7s'}}></use>
                    <use xlinkHref="#s-text" className="text-copy color8" style={{animationDelay: '8s'}}></use>
                    <use xlinkHref="#s-text" className="text-copy color9" style={{animationDelay: '9s'}}></use>
                </g>
            </svg>
        </div>
    );
};

export default TitleEffect;