import React from "react";
import greekSalad from "../images/greek salad.jpg"
import bruchetta from "../images/bruchetta.svg"
import lemonDessert from "../images/lemon dessert.jpg"
import { Link, useNavigate } from "react-router-dom"
const specialData =[
  {
    id:1,
    image:greekSalad,
    title:"Greek Salad",
    price:"$12.99",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons"
  },
  {
    id:2,
    image:bruchetta, 
    title:"Bruchetta",
    price:"$7.99",
    description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    id:3,
    image:lemonDessert,
    title:"Lemon Dessert",
    price:"$4.78",
    description:"This is a straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can  be imagined"
  },
]

function Specials ({image,title,price,description}){
  return(


<section className="special-section">
  <section className="special-sec-center">
    <header className="spSec-headerCon">
      <h2>Special</h2>
      <div>
        <button className="reserve_btn">Online Menu</button>
      </div>
    </header>
    <section id="spCards-Con">
      {
        specialData.map(card =>(
          <div className="card-spSec" key={card.id}>  
          <div className="card-spSec-imgCon">
            {card.image && <img src={card.image} alt={card.title} className="card-spSec-img"/>}
          </div>
          <div className="card-spSec-body">
            <header className="spSec-headerCon">
              {card.title && <h3>{card.title}</h3>}
              {card.title && <h3>{card.price}</h3>}
            </header>
            {card.description && <p>{card.description}</p>}
            <Link to={`/ordenonline/`}>
            <button className="card-btn"> Order online</button>
            </Link>
            
          </div>
        </div> 

        ))
      }
    
    </section>

{/* max width 60rem */}


<section id="spCards-Con_MaxW">
  {
    specialData.map(card =>(
      <div className="card-spSec_MaxW" key={card.id}> 
      <header className="spSec-headerCon">
        {card.title && <h3>{card.title}</h3>}
        {card.price && <h3>{card.price}</h3>}
      </header>
      <div className="card-spSec-body_MaxW">
        <div>
          {card.description && <p>{card.description}</p>}
          <Link to={`/ordenonline/`}>
          <button className="card-btn"> Order online</button>
          </Link>
        </div>      
        {card.image && card.title && <img src={card.image} alt={card.title} className="card-spSec-img_MaxW"/>}
      </div>
    </div> 


    ))
  }

</section>



  </section>



</section>















  )
}

export default  Specials;