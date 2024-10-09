// import { useFBX } from "@react-three/drei";
// import { useRef,useEffect } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three"

// export default function ArmyMan(props) {
//     const fbx = useFBX("/Taunt.fbx"); // Load the FBX file
//     const mixer = useRef(); // Create a reference for the animation mixer
//     const clock = new THREE.Clock(); // Clock to handle animation time
  
//     // Initialize the animation
//     useEffect(() => {
//       if (fbx.animations.length) {
//         mixer.current = new THREE.AnimationMixer(fbx);
//         const action = mixer.current.clipAction(fbx.animations[0]); // Play the first animation
//         action.play();
//       }
//       return () => mixer.current?.stopAllAction(); // Clean up the mixer on unmount
//     }, [fbx]);
  
//     // Update the animation on each frame
//     useFrame(() => {
//       if (mixer.current) mixer.current.update(clock.getDelta());
//     });
  
//     return <primitive position={[1,0.5,-0.8]} scale={[0.003,0.003,0.003]} rotation={props.rotation} object={fbx} />;
//   }