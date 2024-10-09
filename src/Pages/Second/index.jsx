import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef,useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas,useLoader } from "@react-three/fiber";
import { useFBX } from "@react-three/drei";
import * as THREE from "three"
import React from "react";
// import Build from "../../Components/Build.jsx"
import { grass } from "../../Assets/index.jsx";
import { sunTexture } from "../../Assets/index.jsx";
// import KingMan from "../../Components/KingMan.jsx";
// import ArmyMan from "../../Components/ArmyMan.jsx";
import Modal from "../../Components/Modal.jsx"
import { KeyboardControls } from "@react-three/drei";

const Second = () =>{
    const grassTexture = useLoader(THREE.TextureLoader,grass)
    const SunTexture = useLoader(THREE.TextureLoader,sunTexture)
    
    return(
        <div className="h-screen w-screen">
            <Canvas gl={{
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1,  // Lower this value to reduce exposure
            }}>
                <OrbitControls/>
                <ambientLight position={[0,3,2]} intensity={0.0001} />
                <directionalLight
                    position={[0,3,2]}
                    castShadow
                    intensity={0.0000001}
                />
                <PerspectiveCamera makeDefault position={[-20,12,35]} />
                <Modal/>
                <CameraControls/>
{/* \                <Environment preset="forest" background blur={0.5}/> */}
                {/* <mesh position={[0,3,2]} scale={[1,1,1]}> */}
                    {/* x,y,z */}
                    {/* <sphereGeometry args={[0.5,32,32]}/>
                    <meshPhysicalMaterial color="#FDB813" clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5}/>
                </mesh> */}
                {/* <mesh position={[0,0,0]} scale={[1,1,1]}>
                    <boxGeometry args={[5,1,5]} />
                    <meshStandardMaterial map={grassTexture} />
                </mesh> */}
                {/* <Build position={[-1,0.4,0]} scale={[0.09, 0.09, 0.09]}/> */}
                {/* <ArmyMan rotation={[0,0,0]}/> */}
                {/* <KingMan rotation={[0,60,0]}/> */}
            </Canvas>
        </div>
    )
}


export default Second


function CameraControls() {
    const cameraRef = useRef();
  
    // Function to handle key presses and move the camera
    const handleKeyDown = (event) => {
      if (!cameraRef.current) return;
  
      const moveSpeed = 1; // Adjust the movement speed
      switch (event.key) {
        case 'w':
          // Move camera forward (Z direction)
          cameraRef.current.position.z -= moveSpeed;
          break;
        case 's':
          // Move camera backward
          cameraRef.current.position.z += moveSpeed;
          break;
        case 'a':
          // Move camera left (X direction)
          cameraRef.current.position.x -= moveSpeed;
          break;
        case 'd':
          // Move camera right
          cameraRef.current.position.x += moveSpeed;
          break;
        default:
          break;
      }
    };
  
    useEffect(() => {
      // Attach the keydown event listener
      window.addEventListener('keydown', handleKeyDown);
      
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
    return <PerspectiveCamera ref={cameraRef} makeDefault position={[-20, 12, 35]} />;
  }