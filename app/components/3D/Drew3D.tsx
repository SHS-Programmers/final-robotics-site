'use client'
/* eslint-disable */
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { MDrew } from "./MDrew";

function ThreeScene() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[15, 15, 15]} intensity={1000} />
            <pointLight position={[-9, -9, 6]} intensity={100}/>
            <pointLight position={[0, 15, 0]} intensity={1000}/>
            <OrbitControls />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Float speed={1.4} rotationIntensity={1} floatIntensity={0}>
                <MDrew position={[0, -7.5, 0]}/>
            </Float>
        </Canvas>
    );
}

function Drew3D() {
    return (
        <ThreeScene />
    );
}

export default Drew3D;