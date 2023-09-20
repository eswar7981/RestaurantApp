import React from "react";
import "./ItemsInCart.css";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import AddButton from "../Meals/AddButton";
import QuantityChange from "./QuantityChange";
const ItemsInCart = () => {
  const ctx = useContext(CartContext);
  return (
    <div className="cls">
      {ctx.items.map((item) => (
        <li key={item.id}>
          <div className="prod">
            <h3 >{item.Name}</h3>
            <div className="items">
              <h4 >{`$${item.price.toFixed(2)}`}</h4>
              <h3>{`x${item.quantity}`}</h3>
              <QuantityChange item={item}></QuantityChange>
              </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ItemsInCart;
