import logo from "./logo.svg";
import "./App.css";
import MealsSummary from "./Components/Meals/MealsSummary";
import { Fragment, useEffect, useState } from "react";
import Header from "./Components/Layout/Header";
import mealimg from "./images/meals.jpg";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import Portal from "./Components/Portal/Portal";

import Cartprovider from "./Components/Store/Cartprovider";
import cartContext from "./Components/Store/CartContext";
import CartContext from "./Components/Store/CartContext";

function App() {
  const [cartButton, setCartButton] = useState(false);

  const openCart = () => {
    setCartButton(true);
  };

  const closeCart = () => {
    setCartButton(false);
  };

  return (
    <>
      <Cartprovider>
        <Header openCart1={openCart} />

        <MealsSummary />
        {cartButton && <Portal onClose={closeCart} />}
        <AvailableMeals />
      </Cartprovider>
    </>
  );
}

export default App;

