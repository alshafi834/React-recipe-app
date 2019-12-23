import React from "react";
import App from "./App";
import style from "./recipe.module.css";
import RecipeDetails from "./RecipeDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Recipie = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <RecipeDetails />
      <img className={style.rcpimage} src={image} alt="" />
      <p>Calories: {calories}</p>
      <h4>Ingredients</h4>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <Router>
        <button className={style.rcpbutton}>Details</button>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/recipe-details" component={RecipeDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default Recipie;
