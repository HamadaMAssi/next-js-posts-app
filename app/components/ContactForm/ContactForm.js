import "./ContactForm.css"
import React from 'react'

const ContactForm = () => {
  return (
    <div className="form-container">
      <div className="right">
      <h1>Contact Us Now</h1>
      <p>Complete the form below to get in touch with us. We are here to help with all your social media management needs.</p>
      </div>
      <form className="left">
        <div className="in-data">
        <input placeholder="Name"/>
        <input placeholder="Email" />
        </div>
        <textarea placeholder="Message" rows={4}></textarea>
        <button>Send</button>
      </form>
    </div>
  )
}

export default ContactForm
