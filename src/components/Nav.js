import React from "react";
import logo from '../images/Logo.svg';
import MenuIcon from '../images/icon _hamburger_menu.svg';
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav (){
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu= ()=>{
    setMenuOpen(!menuOpen)
  }



  return (
    <header>
      <nav>
        <Link to="/"><img src={logo} alt="logo" id="logo"/></Link>
        <div className="menu-icon" onClick={()=>{
          setMenuOpen(!menuOpen)
        }}>
        <img src={MenuIcon}/>
        </div>
        <ul className={`sidebar ${menuOpen ? "visible" : ""}`}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/orderonline">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>


      </nav>
    </header>
  )

}

export default Nav;