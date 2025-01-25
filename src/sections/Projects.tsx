import { myProjects } from "../constants"

export const Projects = () => {
  const currentProject = myProjects[0]

  
  return (
    <section className="c-space my-20">
      <p className="head-text">My Word</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
              src={currentProject.spotlight}
            />
          </div>

          <div className="p-3 backdrop-filer backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img
              alt="logo"
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} title={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
