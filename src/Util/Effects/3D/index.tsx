import {Float, OrbitControls} from "@react-three/drei";
import {Canvas, useLoader} from "@react-three/fiber";
import "../../../App.css";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import {startTransition} from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: { glb: string }) => {
    let gltf: any = undefined;
    startTransition(() => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderConfig({ type: 'js' });
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        gltf = useLoader(GLTFLoader, props.glb, (loader) => {
            loader.setDRACOLoader(dracoLoader);
        });
    })

    return (
        <Canvas>
            <ambientLight/>
            <pointLight position={[15, 15, 15]} intensity={1000}/>
            <pointLight position={[-9, -9, 6]} intesnity={1000}/>
            <OrbitControls/>
            <Float speed={1.4} rotationIntensity={0} floatIntensity={0}>
                <primitive object={gltf.scene}></primitive>
            </Float>
        </Canvas>
    );
}