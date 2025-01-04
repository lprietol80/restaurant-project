import React, { useState, useEffect } from "react";
import OrderOnline from "../OrderOnline";
import "../bookings/booking.css"

function SignConfirmationCard() {
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
        <OrderOnline />
      ) : (
        <article className="confirm_card">
          <h1>
            Logged in successful.
          </h1>
          <h2>
          Redirecting to order on line...
          </h2>
        </article>
      )}
    </>
  ); 
}

export default SignConfirmationCard;

