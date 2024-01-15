import React, {useEffect, useState} from "react";
import "./styles.css"

export default React.memo((props: { img: string, className?: string }) => {

    useEffect(() => {
        const content = document.getElementById("content");
        if (content === null) return;
        content.addEventListener("scroll", (event: Event) => {
            setDrift(- content.scrollTop / 4);
        });
    })

    const [drift, setDrift] = useState(0);

    return (
        <div className={"parallax-container " + props.className}>
            <div className="parallax" style={{top: drift + "px", backgroundImage: `url("${ props.img }")`}}/>
        </div>
    );
});