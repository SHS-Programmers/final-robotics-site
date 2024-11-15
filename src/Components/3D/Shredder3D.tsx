/* eslint-disable */
import {AccumulativeShadows, Float, OrbitControls, RandomizedLight, Stars} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../../App.css";
import { MShredder } from "../../MShredder"

function ThreeScene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[15, 15, 15]} intensity={1000} />
            <pointLight position={[-9, -9, 6]} intensity={1000}/>
            <pointLight position={[0,15,0]} intensity={1000}/>

            <OrbitControls />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Float speed={1.4} rotationIntensity={1} floatIntensity={0}>
                <MShredder position={[-7,-3,-6]} scale={10}/>
            </Float>
        </>
    );
}

function Drew3D() {
    return (
        <Canvas>
            <ThreeScene />
        </Canvas>
    );
}

export default Drew3D;