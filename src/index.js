import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' };
  return (
    <header className="header">
      <h1>Anki React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzasLength = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzasLength > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven all organic and fresh
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaObject={pizza} key={pizza.name} />;
            })}
          </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on our Menu, please come back later :)</p>
      )}
      {/* <Pizza name="Pizza Prosciutto" ingredient="Tomato, mozarella, ham, aragula, and burrata cheese" photoSrc="pizzas/prosciutto.jpg" price={34} /> */}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  //   if (pizzaObject.soldOut) {
  //     return null;
  //   }
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} />
      <div>
        <h1>{pizzaObject.name}</h1>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  // return React.createElement('footer', null, "Currently we are closed");
  const currentHour = new Date().getHours();
  const open = 9;
  const close = 22;
  const isOpen = currentHour >= open && currentHour <= close;
  // if (isOpen) {
  //     alert('We are currently open');
  // } else {
  //     alert('We are currently closed');
  // }
  //{new Date().toLocaleTimeString()} We are currently open
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We'r currently open</p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p> We open at {open}:00</p>
      )}
    </footer>
  );
}
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// react version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react version before
// React.render(<App/>)
