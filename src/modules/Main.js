import React, { useState, useEffect } from "react";
import Poster from "./MainModules/Poster";
import DisplayPoster from "./MainModules/DisplayPoster";

export default function Main() {
  const [drinks, setDrinks] = useState([]);
  const [picked, setPicked] = useState();
  const [search, setSearch] = useState("");

  let URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  useEffect(() => {
    if (picked) {
      URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${picked}`;
    } else {
      URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    }
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.drinks);
      });
  }, [picked, search]);

  return (
    <main className="main-container">
      <div className={picked ? "board-open" : "board"}>
        {picked && <DisplayPoster props={{ drinks, setSearch, setPicked }} />}
        {!picked && (
          <input
            type="text"
            className="search"
            onChange={(event) => setSearch(event.target.value)}
          />
        )}
        {!picked &&
          drinks &&
          drinks.map((element, index) => {
            return <Poster props={{ element, setPicked }} key={index} />;
          })}
      </div>
    </main>
  );
}
