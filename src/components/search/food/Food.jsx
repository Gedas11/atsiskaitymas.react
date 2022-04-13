

import React, {useState} from 'react'

const Food = ({photo, title, category}) => {
  
  return (
      <div>
      <h3>{title}</h3>
    <img src={photo}/>
    <h4>{category}</h4>
    </div>
  )
}

export default Food