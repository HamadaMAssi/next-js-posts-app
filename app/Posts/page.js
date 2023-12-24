import React, { Suspense } from 'react'
import Hero from '../components/Hero/Hero.jsx'
import Posts from '../components/Posts/Posts'
import HomeImg from "/public/10.jpg"

const page = () => {
  return (
    <div>
      <Hero cName="hero" heroImg='/12.jpg' title="100 Posts" text="" url="" btnClass="hide" buttonText="" />
      <Suspense>
      <Posts title="All Posts" userId={-1} postsNumber={100} btnClass="hide"/>
      </Suspense>
    </div>
  )
}

export default page
