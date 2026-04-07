import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, Text, Stars } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const count = 800; // Reduced from 1500
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return pos;
  }, []);

  const pointsRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      let z = posAttr.getZ(i);
      z += 0.15; // Slightly slower
      if (z > 20) z = -80;
      posAttr.setZ(i, z);
    }
    posAttr.needsUpdate = true;
    pointsRef.current.rotation.z = time * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#7c5de8"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function DigitalValley() {
  const meshRef = useRef();
  
  const { geometry } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(60, 160, 30, 40); // Reduced segments
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const d = Math.abs(x);
      const z = (d > 8) ? Math.pow(d - 8, 1.4) * 0.15 : 0;
      pos.setZ(i, z);
    }
    geo.computeVertexNormals();
    return { geometry: geo };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.z = Math.sin(time * 0.15) * 1.5;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, -30]} geometry={geometry}>
      <meshStandardMaterial 
        color="#3D1FA3" 
        wireframe 
        transparent 
        opacity={0.2} 
        emissive="#7c5de8" 
        emissiveIntensity={0.3} 
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} />
      <fog attach="fog" args={['#0d0428', 5, 45]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#7c5de8" />
      
      <Suspense fallback={null}>
        <group>
          <ParticleField />
          <DigitalValley />
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
            <mesh position={[0, 1.5, -8]}>
              <torusKnotGeometry args={[2.5, 0.3, 100, 16]} />
              <meshStandardMaterial color="#fff" emissive="#7c5de8" emissiveIntensity={1.5} toneMapped={false} />
            </mesh>
          </Float>
        </group>
      </Suspense>

      <Stars radius={80} depth={40} count={2000} factor={3} saturation={0} fade speed={0.5} />
    </>
  );
}

export default function VirtualTour() {
  return (
    <section className="vt-section" id="tour">
      <div className="vt-container">
        <div className="vt-header">
          <div className="eyebrow">Virtual Immersion</div>
          <h2 className="vt-title">
            Step Into <span className="accent">The Valley.</span>
          </h2>
          <p className="vt-sub">
            Experience our world-class infrastructure through a fully immersive 360&deg; environment.
          </p>
        </div>

        <div className="vt-canvas-wrap">
          <div className="vt-overlay">
            <div className="vt-status">
              <span className="status-dot"></span>
              LIVE PORTAL
            </div>
          </div>
          
          <Canvas 
            className="vt-canvas"
            dpr={1} // Optimized for performance
            gl={{ antialias: false, powerPreference: 'high-performance' }}
          >
            <Scene />
          </Canvas>
          
          <div className="vt-cta-overlay">
            <div className="vt-glass-card">
              <h3>Valley Public School</h3>
              <p>Virtual Campus Tour</p>
              <button 
                className="vt-main-btn" 
                onClick={() => window.open('https://tour.nepalschoolmela.com/valleypublic/', '_blank')}
              >
                Launch Full Experience
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
