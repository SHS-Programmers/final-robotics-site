import React from 'react';
import '../../App.css';
import Drew3D from "../../Components/3D/Drew3D";
function Drew3DPage() {
    return (
        <div style={{position: "relative", width: "100%", height: "100vh", backgroundColor:"#000000", borderRadius: "10px"}}>
            <Drew3D />
        </div>
    )
}

export default Drew3DPage


