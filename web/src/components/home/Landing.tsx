import React, { Fragment, useState } from 'react'
import { Link } from "react-router-dom";

const Landing: React.FC  = () => {
  return (
    <Fragment>
    <div className="hero-wrapper">
      <div className="center-wrapper">
        <div className="img-wrapper">
          <img src="/assets/photos/home-img@2x.jpg" alt="Our Bar"/>
        </div>
        <div className="text-wrapper">
          <img src="/assets/logo.svg" alt="Pitchers Logo"/> 
          <ul className="link-wrapper">
          <li>
            <Link to="/" className="highlight">
              <span className="btn-bg"></span>
              <p>View menus</p>
            </Link></li>
            <li className="no-bg">
            <a href="#bookin">
              <span className="btn-bg"></span>
              <p>Make a booking</p></a>
          </li>
          <li className="no-bg" id="hideBtn">
            <a href="#information">
              <span className="btn-bg"></span>
              <p>Bar information</p></a>
          </li>
        </ul>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Landing;