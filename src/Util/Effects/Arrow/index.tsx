import React from 'react';
import './styles.css';

enum Direction { N, W, S, E }

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: { direction: number, centered?: boolean }) => {
    
    const shape: [number, number][] = [[16, 6], [-16, 6], [0, -16], [16, 6]];
    for (let i = 0; i < props.direction; i++) {
        for (let vertex of shape) {
            vertex[0] += vertex[1];
            vertex[1] = vertex[0] - vertex[1];
            vertex[0] -= vertex[1];
            vertex[1] = -vertex[1];
        }
    }

    return (
        <svg className={`arrow arrow-${Direction[props.direction]}` + (props.centered ? " arrow-centered" : "")} viewBox="0 0 32 32">
            <polygon points={shape.map((coord: [number, number]) => (coord[0] + 16) + " " + (coord[1] + 16)).join(" ")}/>
        </svg>
    );
};

export { Direction }