import React from "react";
import Offer from "./HomeModules/Offer";
import Contact from "./HomeModules/Contact";
import Reservation from "./HomeModules/Reservation";

export default function Home() {
  return (
    <div className="home">
      <header></header>
      <Offer />
      <Reservation />
      <Contact />
    </div>
  );
}
