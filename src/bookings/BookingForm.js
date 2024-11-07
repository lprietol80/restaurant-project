import React, { useState } from "react";
import "./booking.css";
import { getCurrentDate } from "../utils/functions";
import { options } from "../utils/data";
import YellowBtn from "../components/YellowBtn";
import Confirmation from "./Confirmation";

function BookingForm() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [completed, setCompleted] = useState(false);
  const [confirmationBtn, setConfirmationBtn] = useState(false);

  const handleDateChange = (e) => setSelectedDate(e.target.value);
  const handleTimeChange = (e) => setSelectedTime(e.target.value);
  const handleGuestsChange = (e) => setSelectedGuests(e.target.value);
  const handleOccasionChange = (e) => setSelectedOccasion(e.target.value);
  const handleOptionChange = (e) => setSelectedOption(e.target.value);

  return (
    <section>
      {completed ? (
        <Confirmation
          date={selectedDate}
          time={selectedTime}
          guests={selectedGuests}
          occasion={selectedOccasion}
          option={selectedOption}
        />
      ) : (
        <form>
          <section className="form-row">
            <div className="labin">
              <label htmlFor="rest-date">Choose date</label>
              <input
                type="date"
                id="res-date"
                min={getCurrentDate()}
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="labin">
              <label htmlFor="res-time">Choose time</label>
              <select
                id="res-time"
                name="time"
                value={selectedTime}
                onChange={handleTimeChange}
              >
                <option>Select time</option>
                {options.slice(4).map((item, index) => (
                  <option key={index} value={item}>
                    {item}:00 pm
                  </option>
                ))}
              </select>
            </div>
          </section>
          <section className="form-row">
            <div className="labin">
              <label htmlFor="guests">Number of guests</label>
              <select
                id="guests"
                value={selectedGuests}
                onChange={handleGuestsChange}
              >
                <option value="" disabled>
                  Number of dinners
                </option>

                {options.map((item) => (
                  <option key={item} value={item}>
                    {item} dinner
                  </option>
                ))}
              </select>
            </div>
          </section>
          <section className="form-row">
            <div className="labin">
              <label htmlFor="occasion" id="occasion">
                Occasion
              </label>
              <select
                id="occasion"
                value={selectedOccasion}
                onChange={handleOccasionChange}
              >
                <option>Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
              </select>
            </div>
          </section>

          <section className="form-row">
            <div className="seating-container">
              <h5>Seating options</h5>
              <div className="seat-option">
                <p>Standard</p>
                <input
                  type="radio"
                  id="seatStd"
                  name="seat"
                  value="Standard"
                  checked={selectedOption === "Standard"}
                  onChange={handleOptionChange}
                />
              </div>
              <div className="seat-option">
                <p>Outside</p>
                <input
                  type="radio"
                  id="seatOtsd"
                  name="seat"
                  value="Outside"
                  checked={selectedOption === "Outside"}
                  onChange={handleOptionChange}
                />
              </div>
            </div>
          </section>
          <section>
            {selectedDate == "" ||
            selectedTime == "" ||
            selectedGuests == "" ||
            selectedOccasion == "" ||
            selectedOption == "" ? (
              <h1 className="redError">please fill in all required fields</h1>
            ) : (
              ""
            )}
          </section>
        </form>
      )}
      <section className="form-row">
        {confirmationBtn ? (
          ""
        ) : (
          <YellowBtn
            text="Make your reservation"
            onClickFunction={(e) => {
              e.preventDefault();
              if (
                selectedDate !== "" &&
                selectedTime !== "" &&
                selectedGuests !== "" &&
                selectedOccasion !== "" &&
                selectedOption !== ""
              ) {
                setCompleted(true);
                setConfirmationBtn(true);
              }
            }}
          />
        )}
      </section>
    </section>
  );
}

export default BookingForm;
