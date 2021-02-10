import React, { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import horn from "./../images/bull.png";

export default function NavBar() {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="nav-bar">
      <div>
        <img src={horn} alt="" className="company-logo" />
        <h4 className="company-name">Bull's Horn Saloon</h4>
      </div>
      <ul
        className={
          !mobile ? "nav-item-list link-list" : "nav-item-open link-list"
        }
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/drinks">Drinks</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/quotes">Funny</Link>
        </li>
      </ul>
      <button className="nav-btn" onClick={() => setMobile(!mobile)}>
        <TiThMenu />
      </button>
    </nav>
  );
}
