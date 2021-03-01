import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
        <h3>404 Page not found</h3>
        <p>Head back home by clicking down below.</p>
        <Link to="/">
          <span className="btn-bg"></span>
          <p>Back home</p>
        </Link>
    </div>
  )
}

export default NotFound;