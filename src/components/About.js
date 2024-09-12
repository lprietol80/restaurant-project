import React from "react";
import imageA from "../images/Mario and Adrian A.jpg";
import imageB from "../images/restaurant chef B.jpg"

function About (){

  return(
    <section className="section-container">
      <section className="section-center">
      <section className="section-body">
        <article className="about-article">
         <header>
            <h1 className="hero_text_h1">Little Lemon</h1>
            <p>Chicago</p>
          </header>

          <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <p>

          At Little Lemon, our passion is to embrace the timeless flavors of the Mediterranean, infusing them with a modern twist. We're a family-owned establishment dedicated to bringing you the heartwarming traditions of our heritage, one delectable dish at a time.
          </p>
       
                     
           
        </article>
        <div className="about-img-container">
           <img src={imageA} alt="Chefs Mario and Adrian" className="about-imgA"  />
           <img img src={imageB} alt="Chef Adrian" className="about-imgB"  />
        </div>
      
       
        





      </section>

    </section>


    </section>

  )
}

export default About;