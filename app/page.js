import Hero from './components/Hero/Hero'
import { HomeImg } from "../public/12.jpg"
import styles from './page.module.css'
import AboutUs from './components/AboutUs/AboutUs'
import Posts from './components/Posts/Posts'
import ContactForm from './components/ContactForm/ContactForm'
import { Suspense } from 'react'

export default function Home() {
  
  const loadingJSX = <h1>Loading . . .</h1>
  return (
    <main>
      <Hero cName="hero" heroImg='/7.jpg' title="Boost Your Online Presence" text="Let us manage your social media platforms for maximum exposure and engagement." url="/" btnClass="show" buttonText="Get Started" />
      <AboutUs />
      <Hero cName="hero-mid" heroImg='/2.jpg' title="" text="" url="" btnClass="hide" buttonText="" />
      <Suspense fallback={loadingJSX}>
        <Posts title="Posts" userId={-1} postsNumber={10} btnClass="show"/>
      </Suspense>
      <ContactForm />
    </main>
  )
}
