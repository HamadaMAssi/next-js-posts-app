import Hero from './components/Hero/Hero'
import { HomeImg } from "../public/12.jpg"
import styles from './page.module.css'
import AboutUs from './components/AboutUs/AboutUs'
import Posts from './components/Posts/Posts'
import ContactForm from './components/ContactForm/ContactForm'

export default function Home() {
  
  return (
    <main>
      <Hero cName="hero" heroImg={HomeImg} title="Boost Your Online Presence" text="Let us manage your social media platforms for maximum exposure and engagement." url="/" btnClass="show" buttonText="Get Started" />
      <AboutUs />
      <Hero cName="hero-mid" heroImg={HomeImg} title="100 Posts" text="" url="" btnClass="hide" buttonText="" />
      <Posts postsNumber={10} btnClass="show"/>
      <ContactForm />
    </main>
  )
}
