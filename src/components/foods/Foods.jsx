import React from 'react'
import Food from '../search/food/Food'
const Foods = ({food}) => {
  return (
    <>
    {food.map(one => <Food photo={one.strMealThumb}/>)}
    </>
  )
}

export default Foods