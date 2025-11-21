// ...existing code...
import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import './FooterForm.css'

const FooterForm = () => {
  const form = useRef(null)
  const [visitorData, setVisitorData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (field) => (e) =>
    setVisitorData(prev => ({ ...prev, [field]: e.target.value }))

  const validate = () => {
    if (!visitorData.firstName.trim()) {
      setErrorMsg('Please enter your first name.')
      return false
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!re.test(visitorData.email)) {
      setErrorMsg('Please enter a valid email address.')
      return false
    }
    setErrorMsg('')
    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      await emailjs.sendForm('service_unys6vk', 'template_76h3vvc', form.current, 'tchUN51JGgo1Ni7QU')
      setStatus('success')
      setVisitorData({ firstName: '', lastName: '', email: '' })
    } catch (err) {
      console.error('Email error:', err)
      setStatus('error')
      setErrorMsg('Failed to send — try again later.')
    } finally {
      setTimeout(() => {
        if (status === 'success') setStatus('idle')
      }, 3500)
    }
  }

  return (
    <footer className="footer-form-root">
      <div className="footer-card">
        <div className="ff-left">
          <h3 className="ff-title">Let's Connect</h3>
          <p className="ff-sub">Sign up for studio updates, new work, and occasional behind‑the‑scenes notes.</p>
          <div className="ff-social">
            <a href="https://www.instagram.com/texture_and_tones/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@R-ArtTherapy/shorts" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.tiktok.com/@textureandtones" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>

          <small className="ff-copyright">© {new Date().getFullYear()} Raghavi Mohan</small>
        </div>

        <div className="ff-form-wrap">
          <form ref={form} onSubmit={handleSubmit} className="ff-form" noValidate>
            <div className="ff-heading-row">
              <h4 className="ff-form-title">Join the Newsletter</h4>
              <p className="ff-form-sub">Be the first to see new paintings and studio drops.</p>
            </div>

            <label className="ff-label">
              <span className="visually-hidden">First name</span>
              <input
                name="first_name"
                type="text"
                placeholder="First name"
                value={visitorData.firstName}
                onChange={handleChange('firstName')}
                className="ff-input"
                aria-required="true"
              />
            </label>

            <label className="ff-label">
              <span className="visually-hidden">Last name</span>
              <input
                name="last_name"
                type="text"
                placeholder="Last name"
                value={visitorData.lastName}
                onChange={handleChange('lastName')}
                className="ff-input"
              />
            </label>

            <label className="ff-label">
              <span className="visually-hidden">Email</span>
              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={visitorData.email}
                onChange={handleChange('email')}
                className="ff-input"
                aria-required="true"
              />
            </label>

            {errorMsg && <div className="ff-error" role="alert">{errorMsg}</div>}

            <div className="ff-actions">
              <button
                type="submit"
                className={`ff-submit ${status === 'sending' ? 'sending' : ''}`}
                disabled={status === 'sending'}
                aria-live="polite"
              >
                {status === 'sending' ? 'Sending…' : 'Subscribe'}
              </button>

              {status === 'success' && <div className="ff-success">Thanks — you’re on the list.</div>}
              {status === 'error' && <div className="ff-error">Sorry — something went wrong.</div>}
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default FooterForm