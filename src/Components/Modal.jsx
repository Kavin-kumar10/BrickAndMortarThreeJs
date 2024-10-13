// Model.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

function Modal() {
  const { scene } = useGLTF('/Finalize.glb');

  return <primitive object={scene} />;
}

useGLTF.preload('/Finalize.glb')


export default Modal;
