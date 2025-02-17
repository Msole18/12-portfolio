import Globe from "react-globe.gl"
import { Button } from "@components/Button"
import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { CanvasLoader } from "@components/CanvasLoader"
import { OrbitControls } from "@react-three/drei"
import { DiceCube } from "@components/DiceCube"



export const About = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('miguel.sole18@gmail.com')
    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              alt="grid1"
              className="w-full sm:h-[276px] h-fit object-contain"
              src="/assets/grid1.png"
            />
            <p className="grid-headtext">
              I'm Miguel
            </p>
            <p className="grid-subtext">
              With a background in electronic engineering and frontend development, I specialize in building clean, responsive, and dynamic React applications
            </p>
          </div>
        </div>

        {/* My Passion */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love building and problem-solving through code. Programming isn&apos;t just my profession—it&apos;s my passion. I&apos;m always exploring new technologies and refining my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: -34.6037, lng: -58.3816, text: 'Buenos Aires, Argentina', color: 'white', size: 10800 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I&apos;m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Buenos Aires, Argentina and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* My Tech Stack */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <Canvas className="w-full h-[276px]">
              <ambientLight intensity={2} />
              <directionalLight position={[2, 2, 2]} />
                <Suspense fallback={<CanvasLoader />}>
                  <group scale={1.5} position={[0, -1.5, 0]} >
                    <DiceCube />
                  </group>
                </Suspense>
              <OrbitControls maxPolarAngle={Math.PI} enableZoom={false} />
            </Canvas>
            <p className="grid-headtext">
              Tech Stack
            </p>
            <p className="grid-subtext">
              My tech stack includes React, TypeScript, and modern web tools to build clean, scalable, and efficient applications
            </p>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  miguel.sole18@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
