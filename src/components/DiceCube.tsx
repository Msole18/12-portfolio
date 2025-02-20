import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useEnvironment, useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { diceTexture } from 'src/constants'
import { useFrame } from '@react-three/fiber'


type GLTFResult = GLTF & {
  nodes: {
    Cube001_Dice_4k_0: THREE.Mesh
    Cube001_Dice_4k_0001: THREE.Mesh
    Cube001_Dice_4k_0002: THREE.Mesh
    Cube001_Dice_4k_0003: THREE.Mesh
    Cube001_Dice_4k_0004: THREE.Mesh
    Cube001_Dice_4k_0005: THREE.Mesh
    Cube001_Dice_4k_0006: THREE.Mesh
  }
  materials: {
    Dice_4k: THREE.MeshStandardMaterial
    face_2: THREE.MeshStandardMaterial
    face_1: THREE.MeshStandardMaterial
    face_4: THREE.MeshStandardMaterial
    face_3: THREE.MeshStandardMaterial
    face_6: THREE.MeshStandardMaterial
    face_5: THREE.MeshStandardMaterial
  }
}

export const DiceCube = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/models/dice_cube.glb') as GLTFResult
  const group = useRef<THREE.Group>(null)

  const meshProps = useTexture({
    faceOneTexture: diceTexture.faceOne,
    faceTwoTexture: diceTexture.faceTwo,
    faceThreeTexture: diceTexture.faceThree,
    faceFourTexture: diceTexture.faceFour,
    faceFiveTexture: diceTexture.faceFive,
    faceSixTexture: diceTexture.faceSix
  })

  useEffect(() => {
    Object.values(meshProps).forEach((texture) => {
      if (texture instanceof THREE.Texture) {
        texture.colorSpace = THREE.SRGBColorSpace;        
      }
    });
  }, [meshProps])

  const envMap = useEnvironment({ preset: 'city' })

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Dice_4k_0.geometry}
            material={materials.Dice_4k}
          />
          <mesh
            name="face_01"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Dice_4k_0001.geometry}
            material={new THREE.MeshStandardMaterial({
              map: meshProps.faceOneTexture,
              transparent: true,
              roughness: 0.2,
              metalness: 0.5,
              envMap: envMap,
            })}
          />
          <mesh
            name="face_02"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Dice_4k_0002.geometry}
            material={new THREE.MeshStandardMaterial({
              map: meshProps.faceTwoTexture,
              transparent: true,
              roughness: 0.2,
              metalness: 0.5,
              envMap: envMap,
            })}
          />
          <mesh
            name="face_03"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Dice_4k_0003.geometry}
            material={new THREE.MeshStandardMaterial({
              map: meshProps.faceThreeTexture,
              transparent: true,
              roughness: 0.2,
              metalness: 0.5,
              envMap: envMap,
            })}
          />
          <mesh
            name="face_04"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Dice_4k_0004.geometry}
            material={new THREE.MeshStandardMaterial({
              map: meshProps.faceFourTexture,
              transparent: true,
              roughness: 0.2,
              metalness: 0.5,
              envMap: envMap,
            })}
          />
          <mesh
            name="face_05"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Dice_4k_0005.geometry}
            material={new THREE.MeshStandardMaterial({
              map: meshProps.faceFiveTexture,
              transparent: true,
              roughness: 0.2,
              metalness: 0.5,
              envMap: envMap,
            })}
          />
          <mesh
            name="face_06"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Dice_4k_0006.geometry}
            material={new THREE.MeshStandardMaterial({
              map: meshProps.faceSixTexture,
              transparent: true,
              roughness: 0.2,
              metalness: 0.5,
              envMap: envMap,
            })}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/dice_cube.glb')
