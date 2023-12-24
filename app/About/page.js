import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Hero from '../components/Hero/Hero'
import ContactForm from '../components/ContactForm/ContactForm'

const page = () => {
  return (
    <div>
      <Hero cName="hero-mid" heroImg='' title="Our Team" text="" url="" btnClass="hide" buttonText="" />
      <AboutUs />
      <ContactForm />
    </div>
  )
}

export default page
