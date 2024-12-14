import { useReducer, useState } from "react";
import "./booking.css";
import { getCurrentDate } from "../utils/functions";
import { options } from "../utils/data";
import Confirmation from "./Confirmation";

const seededRandom = function (seed) {
  let m = 2 ** 35 - 31;
  let a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};

//define the initialState
const initialState = {
  availableTimes: fetchAPI(new Date()),
};

//define the reducer function

function updateTimes(state, action) {
  return { availableTimes: fetchAPI(new Date()) };
}

function BookingForm() {
  const [formData, setformData] = useState({
    date: getCurrentDate(),
    time: "",
    guests: "",
    occasion: "",
    seat: "",
  });

  const [state, dispatch] = useReducer(updateTimes, initialState);

  const [isFilled, setIsFilled] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.time !== "" &&
      formData.occasion !== "" &&
      formData.seat !== ""
    ) {
      setIsFilled(true);
    }
  };
  return (
    <section>
      {!isFilled ? (
        <form onSubmit={handleSubmit}>
          <section className="form-row">
            <div className="labin">
              <label htmlFor="rest-date">Choose date</label>
              <input
                type="date"
                id="res-date"
                name="date"
                min={getCurrentDate()}
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="labin">
              <label htmlFor="res-time">Select time:</label>
              <select
                id="res-time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option>Select time</option>
                {state.availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
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
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
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
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
              >
                <option>Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>A date</option>
                <option>Casual</option>
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
                  onChange={handleChange}
                />
              </div>
              <div className="seat-option">
                <p>Outside</p>
                <input
                  type="radio"
                  id="seatOtsd"
                  name="seat"
                  value="Outside"
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>
          <section>
            {formData.time === "" ||
            formData.occasion === "" ||
            formData.seat === "" ? (
              <p className="redError">please fill in all required fields</p>
            ) : null}
          </section>
          <section className="form-row">
            <button className="yellow-btn" type="submit">
              Make your reservation
            </button>
          </section>
        </form>
      ) : (
        <Confirmation
          date={formData.date}
          time={formData.time}
          guests={formData.guests}
          occasion={formData.occasion}
          seat={formData.seat}
        />
      )}
    </section>
  );
}

export default BookingForm;
