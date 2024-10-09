import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"
import { nature } from "../../Assets";
import { useTexture } from "@react-three/drei"
import { Environment } from "@react-three/drei"

const First = () =>{
    return(
        <div className="h-screen w-screen">
            <Canvas>
                <Experience />
            </Canvas>
        </div>
    )
}

export default First


const Experience = () =>{
    const texture = useTexture(nature)
    return(
        <>
             <OrbitControls/>
            <mesh> 
                <sphereGeometry />
                <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
                <meshPhysicalMaterial texture={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5}/>
                <ambientLight intensity={1} />
                <Environment preset="forest" background blur={0.6} />
            </mesh>
        </>

    )
}