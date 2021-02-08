import React from "react";
import ben from "../images/photos/ben.jpg";
import { quotes } from "../quotes.json";

export default function Quotes() {
  console.log(quotes);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const styles = {
    position: "absolute",
  };

  return (
    <main className="quotes-main">
      <div className="quotes">
        {quotes.map((element, index) => {
          const topAl = `${Math.random() * 150}px`;
          const leftAl = `${Math.random() * 110}px`;
          const transform = `rotate(${Math.random() * 140 - 70}deg)`;
          return (
            <section key={index}>
              <div
                className="person"
                style={{
                  ...styles,
                  top: topAl,
                  left: leftAl,
                  transform: transform,
                  transition: "1200ms",
                }}
                onMouseEnter={(event) => {
                  event.target.style = `left:${leftAl};top:${topAl};position: absolute;transform: scale(1.6); z-index: 999`;
                }}
                onMouseLeave={(event) => {
                  event.target.style = `left:${leftAl};top:${topAl};position: absolute;transform: ${transform}`;
                }}
              >
                <img src={element.image} alt="" className="photo" />
                <div>
                  <div>
                    <p>{element.body}</p>
                    <h5>-{element.name}</h5>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
