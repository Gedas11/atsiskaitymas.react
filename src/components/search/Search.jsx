import "./search.scss";
import Foods from '../foods/Foods'
import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [food, setFood] = useState([]);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((response)=>  response.json())
      .then((results) => setFood(results.meals) )
      .catch((err) => console.log(err))
      
  },[searchInput])


  return (

    <div className="container">
      <form action="" class="search-bar">
        <input
          type="search"
          onChange={(e) => handleChange(e)}
          name="search"
          pattern=".*\S.*"
          required
        />
        <button class="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
      <Foods food={food}/>
    </div>
  );
};

export default Search;
