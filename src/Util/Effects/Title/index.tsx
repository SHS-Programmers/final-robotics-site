// Credit to Claire Larsen for the original code that this effect is based off of.
import React, {useEffect, useState} from 'react';
import './styles.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: { color: string, text: string, className?: string }) => {

    useEffect(() => {
        const content = document.getElementById("content");
        if (content === null) return;
        content.addEventListener("scroll", (event: Event) => {
            setDrift(-content.scrollTop / 3);
        });
    })

    const [drift, setDrift] = useState(0);

    return (
        <div className={"container " + props.className} style={{ top: drift + "px" }}>
            <svg viewBox="0 0 350 200">
                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="80%">
                        {props.text}
                    </text>
                </symbol>
                <g className="g-ants">
                    <use xlinkHref="#s-text" className="text-copy" style={{stroke: props.color}}></use>
                </g>
            </svg>
        </div>
    );
};