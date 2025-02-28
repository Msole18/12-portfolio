import { ContactShadows, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { CanvasLoader } from "@components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import { Leva } from "leva"
import { Button } from "@components/Button"
import { Notebook } from "@components/Notebook"


export const Hero = () => {
  
  const isSmall = useMediaQuery({ maxWidth: 480 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className="bg-hero min-h-screen w-full flex flex-col relative">
      <div className="w-full h-full absolute inset-0 mt-10" >
        <Leva hidden />
        <Canvas className="w-full h-full cursor-pointer">
          <PerspectiveCamera makeDefault position={[-5, 0, -15]} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={<CanvasLoader />}>
            <group 
              rotation={[0, 3.58, 0]} 
              scale={sizes.notebookScale}
              position={sizes.notebookPosition} 
            >
              <Notebook />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows position={[0, -5.5, 0]} scale={20} blur={2} far={4.5} />
          <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit" >
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}
