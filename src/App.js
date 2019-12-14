import React, { useEffect, useState } from "react";
import Recipie from "./Recipie";
import "./App.css";

const App = () => {
  const App_ID = "a021428c";
  const App_Key = "4bd1170c384448fbfed7e44807d4af02";

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`
    );
    const data = await response.json();
    setRecipies(data.hits);
    console.log("response", data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Recipie Search App</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-btn">
          Search Recipies
        </button>
      </form>
      <div className="recipes">
        {recipies.map(recipie => (
          <Recipie
            key={recipie.recipe.label}
            title={recipie.recipe.label}
            calories={recipie.recipe.calories}
            image={recipie.recipe.image}
            ingredients={recipie.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
