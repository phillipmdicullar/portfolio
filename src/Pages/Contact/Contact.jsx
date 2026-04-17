import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact">

      <div className="contact-left">
        <p className="contact-tag">Contact</p>
        <h2>Let’s build something <span>great together</span></h2>
        <p>
          Have a project in mind or just want to connect? 
          I’m always open to discussing new ideas, collaborations, 
          or opportunities to create impactful solutions.
        </p>

        <div className="contact-info">
          <p>Email: emdokolophilip@gmail.com</p>
          <p>Location: Nairobi, Kenya</p>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form">

          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="input-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>

          <button type="submit">Send Message</button>

        </form>
      </div>

    </div>
  )
}

export default Contact