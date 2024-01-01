/* eslint-disable */
import {Float, OrbitControls} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../../App.css";
import {MDrew} from "../../MDrew";

function ThreeScene() {
    return (
        <>
            <ambientLight />
            <pointLight position={[15, 15, 15]} intensity={1} />
            <pointLight position={[-9, -9, 6]} />
            <pointLight position={[0,15,0]} />
            <OrbitControls />
            <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
                <MDrew position={[0,-7.5,0]}/>
            </Float>
        </>
    );
}

function Element3D() {
    return (
        <Canvas>
            <ThreeScene />
        </Canvas>
    );
}

export default Element3D;