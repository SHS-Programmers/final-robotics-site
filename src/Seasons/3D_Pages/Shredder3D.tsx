import React from 'react';
import '../../App.css';
import Shredder3D from "../../Components/3D/Shredder3D";

function Shredder3DPage() {
    return (
        <div style={{position: "relative", width: "100%", height: "100vh", backgroundColor:"#000000", borderRadius: "10px"}}>
            <Shredder3D />
        </div>
    )
}

export default Shredder3DPage


