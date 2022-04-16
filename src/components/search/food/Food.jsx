import './food.scss'

import React, {useState} from 'react'

const Food = ({photo, title, category, ingrained}) => {
  
  return (
      <div className="food">
      <h3>{title}</h3>
      <div className="photo">
    <img src={photo}/>
    </div>
    <h4>{category}</h4>
    </div>
  )
}

export default Food