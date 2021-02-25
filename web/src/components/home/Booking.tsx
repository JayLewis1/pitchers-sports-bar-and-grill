import React, { useState } from 'react'

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: ""
  })
  const onChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Send data to server with axios and handle with nodemailer
  }
  return (
    <div className="booking-container" id="booking">
      <div className="wrapper">
        <div className="text-wrapper">
          <h4>Make a Booking</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero Consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna.
          </p>
          <p className="sub-heading">You can give us a call or email</p>
          <span className="p-wrapper">
            <span className="img-wrapper">
              <img src="/assets/icons/phone.svg" alt="Phone"/>
            </span>
            <p>01291 428013</p>
          </span>
          <span className="p-wrapper">
            <span className="img-wrapper">
              <img  className="email-icon" src="/assets/icons/email.svg" alt="Email"/>
            </span>
            <p>Pitcherssportsbarandgrill@gmail.com</p>
          </span>
        </div>
        <div className="form-wrapper">
          <p className="sub-heading">Use our form</p>
          <form onSubmit={(e) => onSubmit(e)}> 
            <span className="input-wrapper">
              <label htmlFor="name">Name</label>
              <input 
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => onChange(e)}
                />
            </span>
            <span className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input 
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => onChange(e)}
                />
            </span>
            <span className="input-wrapper">
              <label htmlFor="details">Booking Details</label>
              <textarea 
                name="details"
                id="details"
                placeholder="Enter some details about your booking for example number of guests, date, time, etc."
                value={formData.details}
    
                onChange={(e) => onChange(e)}
                />
            </span>
            <button id="submit-btn">
              <span className="btn-bg"></span>
              <p>Send Booking</p>
            </button>
            {/* <input type="submit" value="Send Booking"/> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Booking;