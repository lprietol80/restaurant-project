import React from "react";
import restauranfood from '../images/restauranfood.jpg'

function Hero (){
  return (
    <section className="hero_section">
      <section className="hero_sec_center">
        <article className="hero_article">
          <section className="hero_text">
            <header>
              <h1 className="hero_text_h1">Little Lemon</h1>
              <p className="hero_text_header_p">Chicago</p>
            </header>
            <div className="hero_div">
              <p>We are a family owned mediterranean restaurante focused on traditional recipes served width a modern twist</p>
            </div>
            <button className="reserve_btn">Reserve a table</button>
          </section>
          <div className="hero_image">
          <figure >
            <img src={restauranfood} alt="waiter" className="hero-article-img"/>
          </figure>

          </div>
          
        </article>

      </section>
      
      

    </section>

    
  )

}


export default Hero;
