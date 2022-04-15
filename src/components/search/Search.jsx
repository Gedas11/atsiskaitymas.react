import "./search.scss";
import Foods from '../foods/Foods'
import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [food, setFood] = useState([]);
  const [selected, setSelected] = useState('')
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((response)=>  response.json())
      .then((results) => setFood(results.meals) )
      .catch((err) => console.log(err))
      
  },[selected])
  const submitHandler = (event) => {
  event.preventDefault();
  setSelected(searchInput)
  }
  

  return (

    <div className="container">
      <form action="" class="search-bar" onSubmit={(event)=>submitHandler(event)}>
        <input
          type="search"
          onChange={(e) => handleChange(e)}
          name="search"
          pattern=".*\S.*"
          required
        />
        <button class="search-btn" type="submit" onClick={setFood}>
            
          <span>Search</span>
        </button>
      </form>
     {selected && <Foods food={food}/>} 
    </div>
  );
};

export default Search;
