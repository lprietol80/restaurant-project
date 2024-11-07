import React from "react";
import logo from '../images/Logo.svg';
import MenuIcon from '../images/icon _hamburger_menu.svg';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function Nav (){
  const [isOpen, setIsOpen] = useState(false);
  const isMobile= useMediaQuery({query:'(max-width:60rem)'})

  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <header className="navbar-header">
      <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="logo" id="logo"/>
      </Link>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu} >About</Link></li>
          <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
          <li><Link to="/bookingpage" onClick={toggleMenu}>Booking</Link></li>
          <li className="order-online" ><Link to="/orderonline" onClick={toggleMenu} >Order Online</Link></li>
          <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
        </ul>
        {isMobile && (
          <div className="navbar-toggle" onClick={toggleMenu}>
          <img src={MenuIcon}/>
          </div>
        )

        }

      </nav>
    </header>
  )

}

export default Nav;