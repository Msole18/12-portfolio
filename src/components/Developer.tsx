import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    EyeLeft: THREE.SkinnedMesh
    EyeRight: THREE.SkinnedMesh
    Wolf3D_Head: THREE.SkinnedMesh
    Wolf3D_Teeth: THREE.SkinnedMesh
    Wolf3D_Hair: THREE.SkinnedMesh
    Wolf3D_Beard: THREE.SkinnedMesh
    Wolf3D_Outfit_Top: THREE.SkinnedMesh
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
    Wolf3D_Body: THREE.SkinnedMesh
    Hips: THREE.Bone
  }
  materials: {
    Wolf3D_Eye: THREE.MeshStandardMaterial
    Wolf3D_Skin: THREE.MeshStandardMaterial
    Wolf3D_Teeth: THREE.MeshStandardMaterial
    Wolf3D_Hair: THREE.MeshStandardMaterial
    Wolf3D_Beard: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
    Wolf3D_Body: THREE.MeshPhysicalMaterial
  }
}

// export function Model(props: JSX.IntrinsicElements['group']) {
export const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef<THREE.Group>(null)
    const { nodes, materials } = useGLTF('/models/developer.glb') as GLTFResult
    
    const { animations: clappingAnimations } = useFBX('/models/animations/clapping.fbx')
    const { animations: idleAnimations } = useFBX('/models/animations/idle.fbx') 
    const { animations: lookingAnimations } = useFBX('/models/animations/looking.fbx')
    const { animations: saluteAnimations } = useFBX('/models/animations/salute.fbx')
    const { animations: surprisedAnimations } = useFBX('/models/animations/surprised.fbx') 
  
    clappingAnimations[0].name = 'clapping'
    idleAnimations[0].name = 'idle'
    lookingAnimations[0].name = 'looking'
    saluteAnimations[0].name = 'salute'
    surprisedAnimations[0].name = 'surprised'
  
    const { actions } = useAnimations([
      clappingAnimations[0],
      idleAnimations[0], 
      lookingAnimations[0],
      saluteAnimations[0],
      surprisedAnimations[0]
    ], group)
    
    useEffect(() => {
      actions[animationName]?.reset().fadeIn(0.5).play();
      return () => {
        actions[animationName]?.fadeOut(0.5);
      };
    }, [animationName]);

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Beard"
        geometry={nodes.Wolf3D_Beard.geometry}
        material={materials.Wolf3D_Beard}
        skeleton={nodes.Wolf3D_Beard.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>
  )
}

useGLTF.preload('/models/developer.glb')
