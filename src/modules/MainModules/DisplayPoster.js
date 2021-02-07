import React from "react";
import { MdCancel } from "react-icons/md";

export default function DisplayPoster({
  props: { drinks, setPicked, setSearch },
}) {
  return (
    <div className="display-poster">
      <button
        onClick={() => {
          setPicked("");
          setSearch("");
        }}
        className="leave-btn"
      >
        <MdCancel />
      </button>
      <div className="display-base">
        <h1>WANTED</h1>
        <h3>{drinks[0].strDrink}</h3>
        <img src={drinks[0].strDrinkThumb} alt="" className="poster-img" />
      </div>
      <div className="display-ingredient-list">
        <h1>Ingredient List</h1>
        <ul>
          {drinks[0].strIngredient1 && (
            <li>
              {drinks[0].strIngredient1} - {drinks[0].strMeasure1}
            </li>
          )}
          {drinks[0].strIngredient2 && (
            <li>
              {drinks[0].strIngredient2} - {drinks[0].strMeasure2}
            </li>
          )}
          {drinks[0].strIngredient3 && (
            <li>
              {drinks[0].strIngredient3} - {drinks[0].strMeasure3}
            </li>
          )}
          {drinks[0].strIngredient4 && (
            <li>
              {drinks[0].strIngredient4} - {drinks[0].strMeasure4}
            </li>
          )}
          {drinks[0].strIngredient5 && (
            <li>
              {drinks[0].strIngredient5} - {drinks[0].strMeasure5}
            </li>
          )}
          {drinks[0].strIngredient6 && (
            <li>
              {drinks[0].strIngredient6} - {drinks[0].strMeasure6}
            </li>
          )}
          {drinks[0].strIngredient7 && (
            <li>
              {drinks[0].strIngredient7} - {drinks[0].strMeasure7}
            </li>
          )}
          {drinks[0].strIngredient8 && (
            <li>
              {drinks[0].strIngredient8} - {drinks[0].strMeasure8}
            </li>
          )}
          {drinks[0].strIngredient9 && (
            <li>
              {drinks[0].strIngredient9} - {drinks[0].strMeasure9}
            </li>
          )}
          {drinks[0].strIngredient10 && (
            <li>
              {drinks[0].strIngredient10} - {drinks[0].strMeasure10}
            </li>
          )}
          {drinks[0].strIngredient11 && (
            <li>
              {drinks[0].strIngredient11} - {drinks[0].strMeasure11}
            </li>
          )}
          {drinks[0].strIngredient12 && (
            <li>
              {drinks[0].strIngredient12} - {drinks[0].strMeasure12}
            </li>
          )}
          {drinks[0].strIngredient13 && (
            <li>
              {drinks[0].strIngredient13} - {drinks[0].strMeasure13}
            </li>
          )}
        </ul>
      </div>
      <div className="display-instructions">
        <h1>Instructions</h1>

        <p>{drinks[0].strInstructions}</p>
      </div>
    </div>
  );
}

{
  /* <div className="poster poster-open">
      <button
        onClick={() => {
          setPicked("");
          setSearch("");
        }}
        className="leave-btn"
      >
        <MdCancel />
      </button>
      <h1>WANTED</h1>
      <h3>{drinks[0].strDrink}</h3>
      <img src={drinks[0].strDrinkThumb} alt="" className="poster-img" />
      <div>
        <ul className="ingredient-list">
          <li>{drinks[0].strIngredient1}</li>
          <li>{drinks[0].strIngredient2}</li>
          <li>{drinks[0].strIngredient3}</li>
          <li>{drinks[0].strIngredient4}</li>
          <li>{drinks[0].strIngredient5}</li>
          <li>{drinks[0].strIngredient6}</li>
        </ul>
        <p>{drinks[0].strInstructions}</p>
      </div>
    </div> */
}
