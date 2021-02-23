import React from 'react'

const Information = () => {
  return (
    <div className="information-container">
      <div className="wrapper">
        <div className="column">
          <h6>Contact us</h6>
          <div className="contact-wrapper">
            <span className="info-wrapper">
              <span className="img-wrapper">
                <img src="/assets/icons/phone-black.svg" alt="Phone"/>
              </span>
              <p>01291 428013</p>
            </span>
            <span className="info-wrapper">
              <span className="img-wrapper">
                <img src="/assets/icons/email-black.svg" alt="Email"/>
              </span>
              <p>Pitchers@email.co.uk</p>
            </span>
          </div>
          <h6>Keep Connected</h6>
          <ul className="social-icons">
            <li><a href="/"><img src="/assets/icons/facebook-black.svg" alt="Facebook"/></a></li>
            <li><a href="/"><img src="/assets/icons/instagram-black.svg" alt="Instagram"/></a></li>
            <li><a href="/"><img src="/assets/icons/twitter-black.svg" alt="Twitter"/></a></li>
          </ul>
        </div>
        <div className="column"  id="openingTimes">
          <h6>Opening times</h6>
          <ul className="opening-times">
            <li>
              <p>Monday</p>
              <p className="time">17:00 - 22:00</p>
            </li>
            <li>
              <p>Tuesday</p>
              <p className="time">10:00 - 23:00</p>
            </li>
            <li>
              <p>Wednesday</p>
              <p className="time">  10:00 - 23:00</p>
            </li>
            <li>
              <p>Thursday</p>
              <p className="time">10:00 - 23:00</p>
            </li>
            <li>
              <p>Friday</p>
              <p className="time">10:00 - 02:00</p>
            </li>
            <li>
              <p>Saturday</p>
              <p className="time">10:00 - 02:00</p>
            </li>
            <li>
              <p>Sunday</p>
              <p className="time">  11:00 - 22:00</p>
            </li>
          </ul>
        </div>
        <div className="column" id="facilities">
          <h6>Our facilities</h6>
          <ul className="facilities">
            <li>
              <p>Beer garden</p>
            </li>
            <li>
              <p>Pool table</p>
            </li>
            <li>
              <p>Darts</p>
            </li>
            <li>
              <p>WIFI</p>
            </li>
            <li>
              <p>BT Sports</p>
            </li>
            <li>
              <p>Sky Sports</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Information;