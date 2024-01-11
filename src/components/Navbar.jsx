import React, { useState } from "react";
import "../styles/NavBar.css"
import { Link } from "react-router-dom";

import {FaBars, FaTimes} from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  function handleClick () { 
    setClick(!click);
  }

  function changeColor(){
    if(window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to={"/me/"}>
            <h1>Portfolio.</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li><Link to={"/me/"}>Home</Link></li>
            <li><Link to={"/project/"}>Projects</Link></li>
            <li><Link to={"/about/"}>About</Link></li>
            <li><Link to={"/contact/"}>Contact</Link></li>
        </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{color: "#fff"}} />
        ) : (
          <FaBars size={20} style={{color: "#fff"}} /> 
        )}
      </div>  
    </div>
  )
}

export default Navbar