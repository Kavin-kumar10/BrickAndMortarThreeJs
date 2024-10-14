import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useEffect,useRef } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,PerspectiveCamera } from '@react-three/drei'
import Modal from './Components/Modal'
import * as THREE from "three"
import { Environment } from '@react-three/drei'



function App() {
  return (
    <Router>
      <div className="App h-screen w-screen overflow-hidden">
        <Suspense fallback={
          <div className="h-screen w-screen flex justify-center bg-[beige] items-center">
            <div className="text-2xl text-black">Loading...</div>
          </div>
        }>
            <Canvas castShadow shadows gl={{
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 0.5  // Lower this value to reduce exposure
            }}>
                <OrbitControls 
                  minPolarAngle={Math.PI / 3} // Restricts downward movement (45 degrees)
                  maxPolarAngle={Math.PI / 2} // Restricts upward movement (90 degrees)
                  target={[0, 5, 0]}
                />
                <ambientLight position={[0,3,2]} intensity={0.0001} />
                <directionalLight
                    position={[0,3,2]}
                    castShadow
                    intensity={0.0000001}
                />
                <PerspectiveCamera makeDefault position={[30,-9,-2]} />
                <Modal/>
                {/* <CameraControls/> */}
                <Environment preset="sunset" background blur={0.5}/>
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
        </Suspense>
      </div>
    </Router>
  )
}

export default App


{/* <Canvas className='h-full w-full'>
<mesh className="h-full w-full">
  <sphereGeometry args={[4, 20, 40]} />
  <meshLambertMaterial />
</mesh>
<ambientLight intensity={0.5} />
<directionalLight position={[0, 10, 5]} color="red" />
</Canvas> */}



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