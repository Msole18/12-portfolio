import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  // service_1jg4tmq
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_USERID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
        {
          from_name: form.name,
          to_name: 'Miguel',
          from_email: form.email,
          to_email: 'miguel.sole18@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )

      alert('Your message has been sent successfully!')

      setForm({
        name: '',
        email: '',
        message: ''
      })
      
    } catch (error) {
      console.error(error)
      alert('An error occurred, please try again later')
    } finally {
      setLoading(false)
    }
    
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <section className="c-space my-20">
      <div className="bg-hero relative min-h-screen flex items-center justify-center flex-col">
        {/* <img src="/assets/terminal.png" alt="contact background" className="absolute inset-0 min-h-screen" /> */}
        
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, 
            improve your existing plataform, or  bring a unique project 
            to life, I'm here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input 
                className="field-input"
                name="name"
                onChange={handleChange} 
                placeholder="Berlioz Rod"
                type="text" 
                value={form.name} 
               />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input 
                className="field-input"
                name="email"
                required
                onChange={handleChange} 
                placeholder="berlirod@contactme.com"
                type="email" 
                value={form.email} 
               />
            </label>
            
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea 
                className="field-input"
                name="message"
                required
                rows={5}
                onChange={handleChange} 
                placeholder="Hi I'm interested in working with you..."
                value={form.message} 
               />
            </label>

            <button 
              className="field-btn"
              disabled={loading}
              type="submit"
            >
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
