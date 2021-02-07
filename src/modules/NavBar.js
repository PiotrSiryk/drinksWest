import React, { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="nav-bar">
      <h4>SunFlower</h4>
      <ul className={mobile ? "nav-item-list" : "nav-item-open"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/drinks">Drinks</Link>
        </li>
        <li>
          <Link to="/quotes">Words Of Wisdom</Link>
        </li>
      </ul>
      <button className="nav-btn" onClick={() => setMobile(!mobile)}>
        <TiThMenu />
      </button>
    </nav>
  );
}
