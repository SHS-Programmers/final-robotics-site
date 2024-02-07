import {Float, OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import {useEffect, useState} from "react";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderConfig({ type: 'js' });
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
dracoLoader.preload();

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader)

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: { glb: string }) => {
    const [geometry, setGeometry]: [any, React.Dispatch<any>] = useState(undefined);
    useEffect(() => {
        gltfLoader.load(props.glb, setGeometry);
    }, [props.glb]);

    return (
        <Canvas style={{opacity: geometry ? 1 : 0, transition: "opacity 1000ms"}}>
            <ambientLight/>
            <pointLight position={[15, 15, 15]} intensity={1000}/>
            <pointLight position={[-9, -9, 6]} intesnity={1000}/>
            <OrbitControls/>
            <Float speed={1.4} rotationIntensity={0} floatIntensity={0}>
                <primitive object={geometry?.scene ?? {}}></primitive>
            </Float>
        </Canvas>
    );
}