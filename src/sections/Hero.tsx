import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { PcRoom } from "../components/PcRoom"
import { Suspense } from "react"
import { CanvasLoader } from "../components/CanvasLoader"

export const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi I'm Miguel <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Front-End Developer
        </p>

        <div className="min-h-screen w-full flex">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              <PcRoom scale={0.07} position={[0,0,0]} rotation={[0, 180, 0]}/>
              <ambientLight intensity={1} />
              <directionalLight intensity={0.5} position={[10,10,10]} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section> 
  )
}
