import React from 'react'

import "../styles/WorkCard.css"
import { NavLink } from 'react-router-dom'

function WorkCard({imgsrc, title, text, view, source}) {
  return (
    <div className="project-card">
        <img src={imgsrc} alt={`img-${title}`} />
        <h2 className='project-title'>{title}</h2>
        <div className="project-details">
            <p>{text}</p>
            <div className="project-btns">
                {view && <NavLink to={view} className="btn" target='_blank'>View</NavLink>}
                {source && <NavLink to={source} className="btn" target='_blank'>Source</NavLink>}
            </div>
        </div>
    </div>
  )
}

export default WorkCard