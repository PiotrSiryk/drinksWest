import React from "react";
import ben from "../images/photos/ben.jpg";

export default function Quotes() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const styles = {
    position: "absolute",
  };

  return (
    <main className="quotes-main">
      <div className="quotes">
        {arr.map((element, index) => {
          const topAl = `${Math.random() * 150}px`;
          const leftAl = `${Math.random() * 150}px`;
          const transform = `rotate(${Math.random() * 160 - 80}deg)`;
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
                  event.target.style = `left:${leftAl};top:${topAl};position: absolute;transform: scale(1.8); z-index: 999`;
                }}
                onMouseLeave={(event) => {
                  event.target.style = `left:${leftAl};top:${topAl};position: absolute;transform: ${transform}`;
                }}
              >
                <img src={ben} alt="" className="photo" />
                <div>
                  <div>
                    <p>
                      "Beer is proof that God loves us and wants us to be
                      happy."
                    </p>
                    <h5>-Benjamin Franklin</h5>
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
