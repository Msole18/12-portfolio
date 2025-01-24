import { ContactShadows, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { CanvasLoader } from "../components/CanvasLoader"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import { NotebookModel } from "../components/NotebookModel"
import { Leva } from "leva"
import { Button } from "../components/Button"


export const Hero = () => {
  
  const isSmall = useMediaQuery({ maxWidth: 480 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className="bg-hero min-h-screen w-full flex flex-col relative">
      {/* <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-1">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I'm Miguel <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Front-End Developer
        </p>
      </div> */}

      <div className="w-full h-full absolute inset-0 mt-10" >
        <Leva hidden />
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[-5, 0, -15]} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={<CanvasLoader />}>
            <group 
              rotation={[0, 3.72, 0]} 
              position={[0, 0.5, 0]} 
              scale={0.95}
            >
              <NotebookModel />
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows position={[0, -5.5, 0]} scale={20} blur={2} far={4.5} />
          <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit" >
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}
