import React from "react";

export default (props: { style?: React.CSSProperties }) => {
    return (
        <div className="brand" style={props.style}>
            <img className="brand-icon" src="/media/4959-brand.png" alt="Staley Millennium Falcons Logo"/>
            Millennium Falcons
        </div>
    );
}