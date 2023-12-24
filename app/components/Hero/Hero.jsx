import React from "react";
import "./Hero.css";
import Image from "next/image";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt='HeroImg' src={props.heroImg} style={{color:"#fff"}}/>
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
