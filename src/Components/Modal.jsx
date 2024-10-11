// Model.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

function Modal() {
  const { scene } = useGLTF('/Scene3.glb');

  return <primitive object={scene} />;
}

useGLTF.preload('/Scene3.glb')


export default Modal;
