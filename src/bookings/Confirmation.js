
import React, {useState} from 'react';
import "./booking.css";
import { fontIcons } from '../utils/data';
import ConfirmationCard from './ConfirmationCard';



function Confirmation({ date, time, guests, occasion, seat }) {
  const [formData, setformData] = useState({
    name:"",
    lastName:"",
    email:"",
    phone:"",
    comment:""
  });

  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleChange =(e) => {
    const {name,value}= e.target;
    setformData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsConfirmed(true)
  }

  return (
    <section>
      {!isConfirmed ? (
        <form onSubmit={handleSubmit}>
      <section className="form-row">
          <div className="labin">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your firstname"
              required
            />
          </div>
          <div className="labin">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              id="lastname"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-123-1234"
              required
            />
          </div>
        </section>
        <section className="form-row">
          <div className="labin">
            <label htmlFor="comment">Special request (optional)</label>
            <textarea
              id="comment"
              rows={8}
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Your comment (optional)"
            ></textarea>
          </div>
        </section>
        <section className="form-row">
          <div className="labin">
            <section className="confi-container">
              <div className="confi-row">
                <h3>
                 <i className={fontIcons.calendar}> </i> {date}
                </h3>
                <h3>
                <i className={fontIcons.time}> </i> {time}:00
                </h3>
              </div>
              <div className="confi-row">
                <h3>
                <i className={fontIcons.user}> </i> {guests} dinners
                </h3>
                <h3>
                <i className={fontIcons.occasion}> </i> {occasion}
                </h3>
              </div>
              <h3>
                {seat}
              </h3>
            </section>
          </div>
        </section>
        <section className="form-row">
          <button className='yellow-btn' type='submit'>
            confirm your reservation
          </button>
        </section>
      </form>
    ):(
      <ConfirmationCard/>
      )}
      

    </section>
  
  )
}

export default Confirmation