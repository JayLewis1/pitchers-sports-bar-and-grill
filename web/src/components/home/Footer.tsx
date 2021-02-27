import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  const [iconHover, setIconHover] = useState({type: ""})
  return (
    <div className="footer">
      <div className="wrapper"> 
        <div className="center-container">
          <div className="list-wrapper">
            <p className="heading">Navigation</p>
            <ul>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Menus</a></li>
              <li><a>Booking</a></li>
              <li><a>Information</a></li>
              <li><a>Location</a></li>
            </ul>
          </div>
          <div className="list-wrapper">
            <p className="heading">Menus</p>
            <ul>
              <li><a>Drinks</a></li>
              <li><a>Food</a></li>
            </ul>
          </div>
          <div className="list-wrapper" id="contact-list">
            <p className="heading">Contact</p>
            <ul>
              <li><p>01291 428013</p></li>
              <li><p>Pitcherssportsbarandgrill@gmail.com</p></li>
            </ul>
            <span className="social-container">
                <Link to="/" 
                  onMouseOver={() => setIconHover({type:"facebook"})}
                  onMouseOut={() => setIconHover({type:""})}
                >
                  <img src={`/assets/icons/facebook${iconHover.type === "facebook" ? "-hover" : ""}.svg`}  alt="Facebook"/>
                </Link>
                <Link to="/"
                  onMouseOver={() => setIconHover({type:"instagram"})}
                  onMouseOut={() => setIconHover({type:""})}>
                  <img src={`/assets/icons/instagram${iconHover.type === "instagram" ? "-hover" : ""}.svg`} alt="Instagram"/>
                </Link>
                <Link to="/"
                  onMouseOver={() => setIconHover({type:"twitter"})}
                  onMouseOut={() => setIconHover({type:""})}>
                  <img src={`/assets/icons/twitter${iconHover.type === "twitter" ? "-hover" : ""}.svg`}  alt="Twitter"/>
                </Link>
            </span>
          </div>
        </div>
        <div className="smallprint">
            <p>All rights reserved</p>
            <p className="push-right">Designed and developed by <span className="highlight">Jay Lewis</span></p>
          </div>
      </div>
    </div>
  )
}
export default Footer;
