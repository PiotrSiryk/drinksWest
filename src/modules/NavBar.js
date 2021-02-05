import React, { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";

export default function NavBar() {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="nav-bar">
      <h4>SunFlower</h4>
      <ul className={mobile ? "nav-item-list" : "nav-item-open"}>
        <li>About</li>
        <li>Drinks</li>
        <li>Potions</li>
      </ul>
      <button className="nav-btn" onClick={() => setMobile(!mobile)}>
        <TiThMenu />
      </button>
    </nav>
  );
}
