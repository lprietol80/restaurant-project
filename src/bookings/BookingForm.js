import {useState} from 'react';
import "./booking.css";
import { getCurrentDate } from "../utils/functions";
import { options } from "../utils/data";
import Confirmation from './Confirmation';

function BookingForm() {
  const [formData, setformData] = useState({
    date: "",
    time:"",
    guests:"",
    occasion:"",
    seat:""
  });

  const [isFilled, setIsFilled] = useState(false)

  const handleChange = (e)=>{
    const {name,value} = e.target;
        setformData({
      ...formData,
      [name]:value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (formData.time!=='' && formData.occasion!=='' && formData.seat!=='') {
    setIsFilled(true);
    }
  }




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
              <label htmlFor="res-time">Choose time</label>
              <select
                id="res-time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
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
            {formData.time==='' ||
             formData.occasion==='' ||
             formData.seat==='' ? (
              <h1 className="redError">please fill in all required fields</h1>
            ) : (
              null
            )
            }
          </section>
          <section className="form-row">
          <button className='yellow-btn' type='submit'>Make your reservation</button>
          </section>
      </form>
      ):(
        <Confirmation
        date={formData.date}
        time={formData.time}
        guests={formData.guests}
        occasion={formData.occasion}
        seat={formData.seat}
        />
      )
      }
    </section>
  )
}

export default BookingForm