import { Github } from "@components/icons/Github"
import { LinkedIn } from "@components/icons/LinkedIn"
import { Xtwitter } from "@components/icons/Xtwitter"

export const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/Msole18" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Github className="w-6 h-6 text-white" />
        </a>
        <a href="https://www.linkedin.com/in/miguelsole/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <LinkedIn className="w-5 h-5 text-white" />
        </a>
        <a href="https://x.com/Miguelsole" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Xtwitter className="w-5 h-5 text-white" />
        </a>
      </div>
      <p className="text-white-500">© 2025 Miguel Solé. All rights reserved.</p>
    </footer>
  )
}
