import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useAlert } from "../hooks/useAlert";
import { Alert } from "../components/Alert";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_USERID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
        {
          from_name: form.name,
          to_name: 'Miguel',
          from_email: form.email,
          to_email: 'miguel.sole18@gmail.com',
          message: form.message
        },
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(); 
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000);
        },
        
      );
    
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <section className="bg-hero c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" /> */}

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to
            life, I'm here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-5">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input 
                className="field-input"
                name="name"
                required
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
                placeholder="contact_me@gmail.com"
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

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button> 
          </form>
        </div>
      </div>
    </section>
  )
}
