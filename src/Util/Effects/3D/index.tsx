import {Float, OrthographicCamera, shaderMaterial} from "@react-three/drei";
import {Canvas, extend} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import React, {useEffect, useState} from "react";
import glsl from 'babel-plugin-glsl/macro';
import {Bloom, DepthOfField, DotScreen, EffectComposer, GodRays, HueSaturation} from "@react-three/postprocessing";
import {BlendFunction, KernelSize} from "postprocessing";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderConfig({ type: 'js' });
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
dracoLoader.preload();

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

const DitherMaterial = shaderMaterial(
    {},
    glsl`
        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
    glsl`
        void main() {
            gl_FragColor = vec4(0.0, 0.4, 1.0, 1.0);
        }`
);

extend({ DitherMaterial });

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: { glb: string }) => {
    const [geometry, setGeometry]: [any, React.Dispatch<any>] = useState(undefined);
    useEffect(() => {
        gltfLoader.load(props.glb, setGeometry);
    }, [props.glb]);

    return (
        <Canvas style={{opacity: geometry ? 0.4 : 0, transition: "opacity 5s"}}>
            <OrthographicCamera makeDefault zoom={20} position={[5, 8, 2.5]} rotation={[-0.3 * Math.PI, 0.3 * Math.PI, 0.3 * Math.PI]} top={200} bottom={-200} left={-200} right={200}></OrthographicCamera>
            <ambientLight />
            <pointLight position={[15, 15, 15]} intensity={1000} />
            <pointLight position={[-9, -9, 6]} intesnity={1000} />
            <Float>
                <primitive object={geometry?.scene ?? {}}></primitive>
            </Float>
            <EffectComposer>
                <HueSaturation saturation={0.4} />
                <DotScreen blendFunction={BlendFunction.COLOR_DODGE} angle={Math.PI * 0.5} scale={0.25} />
                <DepthOfField focusDistance={0} focalLength={0.001} bokehScale={20} />
            </EffectComposer>
        </Canvas>
    );
}