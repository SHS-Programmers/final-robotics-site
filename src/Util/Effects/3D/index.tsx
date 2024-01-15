/* eslint-disable */
import {Float, OrbitControls} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../../../App.css";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default () => {
    const gltf = useLoader(GLTFLoader, '/media/seasons/2023/model/Drew.gltf')

    return (
        <Canvas>
            <ambientLight/>
            <pointLight position={[15, 15, 15]} intensity={1000}/>
            <pointLight position={[-9, -9, 6]} intesnity={1000}/>
            <pointLight position={[0, 15, 0]} intensity={1000}/>
            <OrbitControls/>
            <Float speed={1.4} rotationIntensity={0} floatIntensity={0}>
                <primitive object={gltf.scene}></primitive>
                {/*<Drew position={[0,-7.5,0]}/>*/}
            </Float>
        </Canvas>
    );
}