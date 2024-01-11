import React from 'react'

import "../styles/WorkCard.css"
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

function Work() {
  return (
    <div className="work-container">
        <div className="project-container">
            {WorkCardData.map((val, index) =>{
                return(
                    <WorkCard
                        key={index}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work