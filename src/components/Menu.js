import React from 'react'
import {menuDishes} from '../utils/menu_data';
import { Link } from 'react-router-dom';


function Menu () {
  return (
    <section className="special-section">
  <section className="special-sec-center">
  <article className="about-article center">
  
            <h1 className="hero_text_h1">Our Menu</h1>
            <h3>Order your favorite food</h3>
        </article>
   





    <section id="spCards-Con2">
     
  {
  menuDishes.map((card)=>(
    <div className="card-spSec" key={card.id}>  
          <div className="card-spSec-imgCon">
            {card.image && <img src={card.image} alt={card.title} className="card-spSec-img"/>}
          </div>
          <div className="card-spSec-body">
            <header className="spSec-headerCon">
              {card.title && <h3>{card.title}</h3>}
              {card.title && <h3>${card.price}</h3>}
            </header>
            {card.description && <p>{card.description}</p>}

            
          </div>
          <Link to={`/orderonline/`}>
            <button className="card-btn"> Order online</button>
            </Link>
        </div> 
  
  
  ))
  }
    </section>
    </section>
    </section>
  )
}

export default Menu;
