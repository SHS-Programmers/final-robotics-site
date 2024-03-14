import React, {useEffect, useState} from 'react';
import Scene3D from "../../../Util/Effects/3D";
import './styles.css'
import {NavLink} from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: { season: number }) => {

    const [info, setInfo] = useState({
        name: undefined,
        theme: undefined,
        summary: undefined
    });

    useEffect(() => {
        import(`../../../../public/media/seasons/${props.season}/about.json`).then(setInfo);
    }, [props.season, setInfo]);

    return (
        <div className="season-container">
            <Scene3D glb={`/media/seasons/${props.season}/model.glb`}/>
            <div className="season-overlay">
                <img className="game-logo" src={`/media/seasons/${props.season}/logo.png`}
                     alt={`${props.season} season logo`}/>
                <h1 style={{textAlign: "center", margin: "30px 20px 10px", textShadow: "0px 0px 15px #000"}}>{props.season} Season</h1>
                <h2 style={{textAlign: "center", color: info?.theme, margin: "10px 20px", textShadow: `0px 0px 10px ${info?.theme}, 0px 0px 50px #161616`}}>{info?.name}</h2>
                <p style={{margin: "0px 40px", fontStyle: "italic", fontSize: "0.8em", lineHeight: "1.5em"}}>{info?.summary}</p>
            </div>
        </div>
    );
}


