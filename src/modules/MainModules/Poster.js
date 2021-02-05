import React from "react";

export default function Poster({ props: { element, setPicked } }) {
  return (
    <div className="poster" onClick={(event) => setPicked(element.idDrink)}>
      <h1>WANTED</h1>
      <img src={element.strDrinkThumb} alt="" className="poster-img" />
      <h3>{element.strDrink}</h3>
    </div>
  );
}
