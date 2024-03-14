import React from 'react';
import './styles.css';
import Scene3D from "../../Util/Effects/3D";
import RobotOverview from "./RobotOverview";
import FrostedGlass from "../../Util/Effects/FrostedGlass";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <ul className="season-list">
            {
                [2024, 2023, 2022].map((season) => <li key={season}>
                    <FrostedGlass style={{margin: "10px"}}>
                        <RobotOverview season={season} />
                    </FrostedGlass>
                </li>)
            }
        </ul>
    );
}