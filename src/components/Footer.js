import React from "react";
import logo from '../images/Logo .svg'

function Footer (){
return(
  <footer className="bmf-flex yellow-bgd">    
    <section>
      <div>
      <img src={logo} alt="logo"/>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
      </div>
      <nav className="navbar-footer">
      <h5>
        Important Links
      </h5>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
    <div>
      <h5>
        contact
      </h5>
      <div>
      <p>Address:</p>
      <p>123 Town Street, Chicago</p>
      </div>
      <div>
      <p>Phone</p>
      <p>+1 213456789</p>
      </div>
      <div>
      <p>email</p>
      <p>little@littlelemon.com</p>
      </div>
    </div>
    <nav className="navbar-footer">
      <h5>
        Social Media Links
      </h5>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>

      </ul>
    </nav>

    </section>
  </footer>
)
}
export default Footer;