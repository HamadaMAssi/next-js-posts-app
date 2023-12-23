"use client"
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { MenuItems } from '../data/MenuItems';
import Link from 'next/link'

const Navbar = () => {

  const handleActive = (event) => {
    const links = document.querySelectorAll(".container ul li");
    
    // Remove "active" class from all elements
    links.forEach((element) => {
      element.classList.remove("active");
    });
    // Add "active" class to the clicked element
    event.currentTarget.classList.add("active");
  };
  
  useEffect(()=>{
    const links = document.querySelectorAll(".container ul li");
    links[0].classList.add("active");
  },[]);
    
  return (
    <nav className='container'>
        <h1 className='navbar-logo'>Posts</h1>
        <ul className='navbar-menu'>
          {MenuItems.map((item, index)=>{
            return (
              <li key={index} onClick={handleActive}>
                <Link className={item.cName} href={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                  </Link></li>
            )
          })}
        </ul>
    </nav>
  )
}

export default Navbar

