import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { BiDish } from "react-icons/bi";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { MdOutlineTableRestaurant } from "react-icons/md";
import ConfirmationCard from "./ConfirmationCard";

import "./booking.css";

function Confirmation({ date, time, guests, occasion, option }) {
  const [userName, setUserName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [policy, setPolicy] = useState("");
  const [confirmed, setconfirmed] = useState(false);

  const handleNameChange = (e) => setUserName(e.target.value);
  const handleLastChange = (e) => setLastname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);
  const handlePolicyChange = (e) => setPolicy(e.target.value);

  return (
    
    <section>
      {confirmed  ? (<ConfirmationCard/>):(
        <section>
      <form id="confirmation">
        <section className="form-row">
          <div className="labin">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={userName}
              onChange={handleNameChange}
              placeholder="Enter your firstname"
              required
            />
          </div>
          <div className="labin">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={handleLastChange}
              placeholder="Enter your lastname"
              required
            />
          </div>
        </section>
        <section className="form-row">
          <div className="labin">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter a valid email"
              required
            />
          </div>
        </section>

        <section className="form-row">
          <div className="labin">
            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="123-123-1234"
              required
            />
          </div>
        </section>

        <section className="form-row">
          <div className="labin">
            <label htmlFor="comment">Special request</label>
            <textarea
              id="comment"
              rows={8}
              value={comment}
              onChange={handleCommentChange}
              placeholder="Your comment"
            ></textarea>
          </div>
        </section>
        <section className="form-row">
          <div className="labin">
            <section className="confi-container">
              <div className="confi-row">
                <h3>
                  <FaRegCalendarAlt /> {date}
                </h3>
                <h3>
                  <GoClock /> {time}:00
                </h3>
              </div>
              <div className="confi-row">
                <h3>
                  <BiDish /> {guests} dinners
                </h3>
                <h3>
                  <LiaGlassCheersSolid /> {occasion}
                </h3>
              </div>
              <h3>
                <MdOutlineTableRestaurant /> {option}
              </h3>
            </section>
          </div>
        </section>

        <section className="form-row">
          <div className="seat-option">
            <input
              type="radio"
              id="policy"
              name="policy"
              value="acepted"
              checked={policy === "acepted"}
              onChange={handlePolicyChange}
              required
            />
            <p>You agree to our friendly Privacy policy</p>
          </div>
        </section>

        <section>
          {userName == "" ||
          lastname == "" ||
          email == "" ||
          phone == "" ||
          policy == "" ? (
            <h1 className="redError">please fill in all required fields</h1>
          ) : (
            ""
          )}
        </section>
      </form>
    
      <section className="form-row">
        <button
          className="yellow-btn"
          type="submit"
          form="confirmation"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            if (
              userName !== "" &&
              lastname !== "" &&
              email !== "" &&
              phone !== "" &&
              policy == "acepted"
            ) {
              console.log(userName, lastname, email, phone, policy);
              setconfirmed(true);
            }
          }}
        >
          Confirm your reservation
        </button>
      </section>
      </section>)}
    </section>
  );
}

export default Confirmation;
