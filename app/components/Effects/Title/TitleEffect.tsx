import React from "react";
import "./TitleEffect.css";

interface TitleEffectProps {
    color1: string;
    color2: string;
    text: string;
}

const TitleEffect: React.FC<TitleEffectProps> = ({ color1, color2, text }) => {
    return (
        <div className="flex items-center h-full justify-center">
            <svg
                viewBox="0 0 300 200"
                className="block w-[960px] h-[300px] mx-auto relative"
            >
                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="80%" className="font-jockey text-[10.5em]">
                        {text}
                    </text>
                </symbol>
                <g className="g-ants">
                    <use
                        href="#s-text"
                        className="text-copy"
                        style={{ stroke: color1, animationDelay: "1.9s" }}
                    />
                    <use
                        href="#s-text"
                        className="text-copy"
                        style={{ stroke: color2, animationDelay: "2s" }}
                    />
                    <use href="#s-text" className="text-copy color3" style={{ animationDelay: "3s" }} />
                    <use href="#s-text" className="text-copy color4" style={{ animationDelay: "4s" }} />
                    <use href="#s-text" className="text-copy color5" style={{ animationDelay: "5s" }} />
                    <use href="#s-text" className="text-copy color6" style={{ animationDelay: "6s" }} />
                    <use href="#s-text" className="text-copy color7" style={{ animationDelay: "7s" }} />
                    <use href="#s-text" className="text-copy color8" style={{ animationDelay: "8s" }} />
                    <use href="#s-text" className="text-copy color9" style={{ animationDelay: "9s" }} />
                </g>
            </svg>
        </div>
    );
};

export default TitleEffect;
