import React from 'react'
import Hero from '../components/Hero/Hero.jsx'
import Posts from '../components/Posts/Posts'
import HomeImg from "/public/10.jpg"

const page = () => {
  return (
    <div>
      <Hero cName="hero" heroImg={HomeImg} title="100 Posts" text="" url="" btnClass="hide" buttonText="" />
      <Posts postsNumber={100} btnClass="hide"/>
    </div>
  )
}

export default page
