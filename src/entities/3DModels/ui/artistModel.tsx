import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const ArtistModel = () => {
  const { scene } = useLoader(GLTFLoader, '/models/3dmodel.glb', (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    loader.setDRACOLoader(dracoLoader);
  });
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (meshRef.current.rotation.y += delta));
  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={1}
      position={[50, -220, -350]}
      className="min-h-[650px]"
    />
  );
};

export default ArtistModel;
