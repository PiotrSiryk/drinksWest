import React from "react";

export default function Reservation() {
  return (
    <div className="reservation">
      <h1>Reservations</h1>
      <div>
        <input type="date" />
        <select id="cars" name="dsa">
          <option value="">--Please choose an option--</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <select id="cars" name="dsa">
          <option value="">Party Size</option>
          <option value="1-5">1-5</option>
          <option value="6-10">6-10</option>
          <option value="11-15">11-15</option>
          <option value="16-20">16-20</option>
          <option value=">20"> more than 20</option>
        </select>
      </div>
    </div>
  );
}
