import React from "react";
import Food from "../search/food/Food";
const Foods = ({ food }) => {
 
    
  return (
    <>
      {food.map((one) => (
        <Food 
        key={one.id}
        photo={one.strMealThumb}
        title={one.strTags}
        category={one.strIngredient}
        />
      ))}
    </>
  );
};

export default Foods;
