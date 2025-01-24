
export const NotebookScreen = ({ onLoad }: { onLoad: () => void }) => (
  <>
    {/* <iframe
      src="https://pictlify.vercel.app/"
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
      }}
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      title="Pokédex"
      onLoad={onLoad}
    /> */}
    <section className = "bg-hero bg-black min-h-screen w-full flex flex-col relative" >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-1">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I'm Miguel <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Front-End Developer
        </p>
      </div>
    </section >
  </>
)
