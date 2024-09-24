import React from "react";
import logo from '../images/Logo .svg'
import verticalLogo from '../images/verticalLogo.PNG'
import facebookImg from '../images/facebookIcon.PNG'
import instagramImg from '../images/InstagramIcon.PNG'
import walogoImg from '../images/waLogo.PNG'
import { Link } from "react-router-dom";

function Footer (){
return(
  <footer className="bmf-flex yellow-bgd">    
    <section className="sec-centerFooter">
      <div className="logoContainer">
      <img src={verticalLogo} alt="logo"/>
      </div>
      <div className="footerNav">
        <div className="footerNavHeader">
          <h5>Menu</h5>
          <h5>Reservation</h5>
        </div>
        <div className="navBodyFooter">
          <ul>
            <li><Link to="/menu">Early Bird</Link></li>
            <li><Link to="/menu">Special Occasion</Link></li>
            <li><Link to="/menu">Holiday Season</Link></li>
            <li><Link to="/menu">Lunch</Link></li>
          </ul>
          <ul>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/orderonline">Order</Link></li>
            <li><Link to="/delivery">Delivery</Link></li>
          </ul>
        </div>
        </div>

      <div className="contactFooter">
        <h5>Contact</h5>
        <div>
          <p>+234 988 764</p>
          <p>+63 6378 637</p>
          <p>eat@little_lemon.com</p>
        </div>
        <ul className="socials">
          <li><Link to="https://www.facebook.com/"><img src={facebookImg} /></Link></li>
          <li><Link to="https://www.instagram.com/"><img src={instagramImg} /></Link></li>
          <li><Link to="https://web.whatsapp.com/"><img src= {walogoImg}/></Link></li>
        </ul>
      </div>
    </section>
  </footer>
)
}
export default Footer;