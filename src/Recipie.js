import React from "react";
import style from "./recipe.module.css";

const Recipie = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.rcpimage} src={image} alt="" />
      <p>Calories: {calories}</p>
      <h4>Ingredients</h4>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <button className={style.rcpbutton}>Details</button>
    </div>
  );
};

export default Recipie;
