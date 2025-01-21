import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { Mesh } from "three";

 
export const Target = ({...props}) => {
  const targetRef = useRef<Mesh>(null);
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
 
  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene} />
    </mesh>
  )
}
