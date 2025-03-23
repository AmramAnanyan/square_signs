import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import SubHeader from '../../components/SubHeader';
import { OrbitControls } from '@react-three/drei';
import BoxModel from '../../entities/3DModels/ui/boxModel';
import ArtistModel from '../../entities/3DModels/ui/artistModel';
const Viewer3D = () => {
  return (
    <div>
      <SubHeader
        logo="3D Model Viewer React Free Fiber"
        title="Explore 3D Models with Ease"
        description="An interactive 3D model viewer powered by Three.js and WebAssembly. Supports GLB/GLTF models with high-performance rendering, real-time controls, and optimized decoding for smooth visualization."
      />
      <div className="flex flex-row gap-4 w-full">
        <div className="glass-panel p-3 flex flex-col items-center gap-3 animate-fade-in w-16 bg-white "></div>
        <Canvas className="canvas-container !h-[650px]">
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Suspense>
            <BoxModel position={[-4, 0, 0]} />
            <BoxModel position={[4, 0, 0]} />
          </Suspense>
          <Suspense>
            <ArtistModel />
          </Suspense>
          <OrbitControls />
        </Canvas>
        <div className="glass-panel p-3 flex flex-col items-center gap-3 animate-fade-in w-16 bg-white"></div>
      </div>
    </div>
  );
};

export default Viewer3D;
