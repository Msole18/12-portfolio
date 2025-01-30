import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { NotebookScreen } from './NotebookScreen'


type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
}

export const NotebookModel = (props: JSX.IntrinsicElements['group']) => {

  const { nodes, materials } = useGLTF('/models/mac-draco.glb') as GLTFResult
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-1 + Math.sin(t / 2)) / 2, 0.1)
  })

  return (
    <group ref={group} {...props} dispose={null} >
      <group rotation-x={-0.425} position={[0, -0.08, 0.41]}> 
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            {/* Drei's HTML component can "hide behind" canvas geometry */}
            <Html
              style={{
                width: '334px',
                height: '216px',
                borderRadius: '3px',
                overflow: 'hidden',
                padding: '0',
              }}
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              occlude
            >
              <div
                style={{
                  width: '668px',
                  height: '438px',
                  transform: 'scale(0.5)',
                  transformOrigin: 'top left',
                }}
                onPointerDown={(e) => e.stopPropagation()}
              >
                <NotebookScreen  />
                
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}
