import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';
import { useState, useEffect } from "react";

const Computers = ({isMobile }) => {
  const computer = useGLTF('../desktop_pc/scene.gltf');

  console.log('computer model loaded, ', computer);
  return (
    <mesh>
      <hemisphereLight intensity={0.6} groundColor="black" />
      <pointLight intensity={1.2} position={[10, 10, 10]} />
      <spotLight
        intensity={1}
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <ambientLight intensity={0.3} />
      <primitive
        object={computer.scene}
        scale={isMobile? 0.75: 0.85}
        position={isMobile? [0, -5, -2.2]:[0, -5.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    //set the initial value of the `isMobile` stte variable

    setIsMobile(mediaQuery.matches); 

    // define a cllback func to handle changes to the media query
    const handleMediaQueryChange=(event) =>{
      setIsMobile(event.matches);
    }
    // add the callback function as a listener for changes  to the media query

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    // remove the listener when the component is Unmounted
    return()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, []);
  console.log('rendering computersCanvas');
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [15, 3, 5], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
