import { CanvasLoader } from "@components/CanvasLoader"
import { Developer } from "@components/Developer"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { workExperiences } from "src/constants"


export const WorkExperience = () => {
  const [animationName, setAnimetionName] = useState('')

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.5} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-2.5} scale={2.7} animationName={animationName}/>
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {workExperiences.map(({id, name, pos, icon, duration, title, animation}, index) => (
              <div 
                key={id} 
                className="work-content_container group" 
                onClick={() => setAnimetionName(animation.toLocaleLowerCase())}
                onPointerOver={() => setAnimetionName(animation.toLocaleLowerCase())}
                onPointerOut={() => setAnimetionName('idle')}
              >
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="work-content_logo">
                    <img
                      src={icon}
                      alt="logo"
                      className="w-5/6 h-5/6"
                      onError={(e) => (e.currentTarget.src = "/assets/company-default.png")}
                    />
                  </div>
                  
                  <div className="work-content_bar" />
                </div>

                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold textwhite-800">{name}</p>
                  <p className="text-sm mb-5">
                    {pos} -- <span>{duration}</span>
                  </p>
                  <p className="group-hover:text-white transition-all ease-in-out duration-500">{title}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
