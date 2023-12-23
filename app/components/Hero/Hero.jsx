import React from "react";
import "./Hero.css";
import Image from "next/image";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        {/* <Image
          src="/public/img.jpg"
          alt="image Logo"
          width={200}
          height={200}
          priority
        /> */}
         <img alt='HeroImg' src="C:\Users\hamada assi\OneDrive\Documents\code\Next.js\posts\public/1.jpg" style={{color:"#fff"}}/>
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
