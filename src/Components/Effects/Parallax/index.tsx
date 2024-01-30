import React, {useEffect, useState} from "react";
import "./styles.css"

export default (img: string) => {
    const [drift, setDrift] = useState(0);

    useEffect(() => {
        document.getElementById("content")?.addEventListener("scroll", (event: Event) => {
            console.log(event.currentTarget);
            setDrift(0 - (Number(event.currentTarget) ?? 0) / 4);
        });
    });

    return (
        <div className="parallax-container">
            <div className="parallax" style={{top: drift + "px", backgroundImage: `url("${ img }")`}}/>
            <div className="parallax-dimmer"/>
        </div>
    );
}