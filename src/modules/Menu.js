import React from "react";

export default function Menu() {
  return (
    <main className="menu">
      <header>
        <h1>Menu</h1>
      </header>
      <div className="menu-sections">
        <section className="menu-list">
          <h3>Ribs</h3>
          <div>
            <img
              src="https://www.thespruceeats.com/thmb/cOrfL1MrSMQwKX9adyrFHtclObI=/1331x998/smart/filters:no_upscale()/slow-grilled-beef-ribs-335856-Hero-5b8c4b33c9e77c007bc64595.jpg"
              alt=""
            />
            <div>
              <p>1. MEAT PLATE -- 13.99$</p>
              <p>2. MEAT PLATE -- 18.99$</p>
              <p>3. MEAT PLATE -- 21.99$</p>
              <p>4. Big Rib -- 51.99$</p>
              <p>5. Big Rib -- 51.99$</p>
              <p>6. Big Rib -- 51.99$</p>
            </div>
          </div>
        </section>
        <section className="menu-list">
          <h3>Pizza</h3>
          <div>
            <img
              src="https://as2.ftcdn.net/jpg/02/16/56/57/500_F_216565755_KtH54KSW2C5bOukUuOyLTxZKvpFIjqet.jpg"
              alt=""
            />
            <div>
              <p>1. Classic -- 13.99$</p>
              <p>2. Premium -- 18.99$</p>
              <p>3. Salami -- 21.99$</p>
              <p>4. Marrocan -- 51.99$</p>
              <p>5. Farm -- 51.99$</p>
              <p>6. Vege -- 51.99$</p>
            </div>
          </div>
        </section>
        <section className="menu-list">
          <h3>Steak</h3>
          <div>
            <img
              src="https://www.tasteofhome.com/wp-content/uploads/2019/01/medium-rare-steak-shutterstock_706040446.jpg"
              alt=""
            />
            <div>
              <p>1. Tournedo -- 13.99$</p>
              <p>2. T-Bone -- 18.99$</p>
              <p>3. Fiorentina -- 21.99$</p>
              <p>4. Tomahawk -- 51.99$</p>
              <p>5. Saddle -- 51.99$</p>
              <p>6. Indian -- 51.99$</p>
            </div>
          </div>
        </section>
        <section className="menu-list">
          <h3>Burger</h3>
          <div>
            <img
              src="https://www.horecanet.pl/wp-content/uploads/2017/02/burgery-zdjecie-tytulowe.jpg"
              alt=""
            />
            <div>
              <p>1. Standard -- 13.99$</p>
              <p>2. Cheese -- 15.99$</p>
              <p>3. Elk -- 21.99$</p>
              <p>4. Turkey -- 21.99$</p>
              <p>5. Bison -- 23.99$</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
