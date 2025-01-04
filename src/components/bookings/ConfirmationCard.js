import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";

import "./booking.css";

function ConfirmationCard() {
  const [closeCard, setCloseCard] = useState(false);

  // useEffect to handle side-effects like setting a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setCloseCard(true);
    }, 4000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures it runs only once

  return (
    <>
      {closeCard ? (
        <BookingForm />
      ) : (
        <article className="confirm_card">
          <h1>Your Reservation has been confirmed</h1>
          <h2>
            Check your Email <i className="fa-regular fa-envelope"></i>
          </h2>
        </article>
      )}
    </>
  ); 
}

export default ConfirmationCard;

