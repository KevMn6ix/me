import "../styles/HeroImg2.css"
import React from 'react'

function HeroImg2 (props) {
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
            <h1>{props.contactMail}</h1>
        </div>
    </div>
  )
}

export default HeroImg2