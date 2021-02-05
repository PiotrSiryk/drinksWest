import React from "react";
import { MdCancel } from "react-icons/md";

export default function DisplayPoster({
  props: { drinks, setPicked, setSearch },
}) {
  return (
    <div className="poster poster-open">
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
    </div>
  );
}
