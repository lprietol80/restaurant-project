import React from "react";
import logo from '../images/Logo .svg'

function Footer (){
return(
  <footer>
    <section>
      <img src={logo} alt="logo"/>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
    </section>
    <nav>
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
    <section>
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
      
    </section>
    <nav>
      <h5>
        Social Media Links
      </h5>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>

      </ul>
    </nav>




  </footer>
)

}
export default Footer;