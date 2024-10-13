// Model.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

function Modal() {
  const { scene } = useGLTF('/Final4.glb');

  return <primitive object={scene} />;
}

// useGLTF.preload('/TwoFloor1.glb')


export default Modal;
