import React from 'react';
import Scene3D from '../../Util/Effects/3D'

// eslint-disable-next-line import/no-anonymous-default-export
export default (glb: string) => {
    return (
        <div style={{position: "relative", width: "100%", height: "100vh", backgroundColor:"#000000", borderRadius: "10px"}}>
            <Scene3D glb={glb} />
        </div>
    );
}


