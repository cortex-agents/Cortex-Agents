"use client"

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PointMaterial, Points } from '@react-three/drei'
import * as THREE from 'three'

function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null)

  // Generate random points for a starfield / particle effect
  const positions = useMemo(() => {
    const count = 1000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }

    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-[-10] bg-[#02040a] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#02040a']} />
        <ambientLight intensity={0.5} />
        <ParticleNetwork />
        
      </Canvas>
    </div>
  )
}
