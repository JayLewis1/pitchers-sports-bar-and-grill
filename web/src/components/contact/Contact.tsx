import React from 'react'

 const Contact: React.FC = () => {

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit")
  }
  return (
    <div className="contact-container"> 
      <h3>Contact us</h3>
      {/* <p>If you're interested in booking a table, a section of the bar for an event or just have any questions for us get in touch. Use the form below or reach us on any of our contact information.</p> */}
      <form onSubmit={(e) => onSubmit(e)}>
        <span className="input-wrapper">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name"/>
        </span>
        <span className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Enter your email"/>
        </span>
        <span className="input-wrapper">
          <label htmlFor="details">Details or question</label>
          <textarea  id="details" name="details" placeholder="Enter some details about your booking for example how many guests, date and time, etc. Alternatively ask a question you have for use "/>
        </span>
        <input type="submit" value="send form">
        </input>
      </form>
    </div>
  )
}
export default Contact;