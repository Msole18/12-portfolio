import { useState } from "react"
import { navLinks } from "../constants"

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          <a 
            className="nav-li_a" 
            href={href} 
            onClick={() => {}}
          >{name}</a>
        </li>
      ))}
    </ul>
  )
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90 '>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
          <a href="/" className="text-neutral-400 font-bold text-2xl hover:text-white transition-colors">
            {/* <img className="w-12 h-12" src="/assets/ms-logo.svg" alt="logo" />  */}
            Miguel Solé
          </a>
          <button className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" onClick={toggleMenu}>
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  )
}
