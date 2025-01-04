import React from "react";
import BookingForm from "./BookingForm";
import restaurant from "../../images/restaurant.jpg"
import "./booking.css"
import chef from "../../images/restaurantChef.jpg"

function BookingPage (){
return (
  <> 
  <section style={{background:"#495E57", paddingBottom:"2rem"}}>
    <section className="article-container">
      <div>
        <article className="booking-article">
          <header>
            <h1 className="hero_text_h1">Little Lemon</h1>
            <p>Chicago</p>
          </header>
          <div>
            <p>Find a table for every occasion</p>
          </div>

        </article>
      </div>
      <div className="booking-img-container">
        <img src={restaurant} alt="restaurant outside" className="booking-imgA"/>
        <img src={chef} alt="cheft Adrian making salad" className="booking-imgB"  />

      </div>

    </section>
      <BookingForm/>
  </section>

  </>

  


)

}

export default BookingPage;