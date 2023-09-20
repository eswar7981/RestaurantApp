import React, { useContext, useState } from "react";
import "./QuantityChange.css";
import CartContext from "../Store/CartContext";
const QuantityChange = (props) => {
  const ctx = useContext(CartContext);

  const quantityHandler = (e) => {
    e.preventDefault();
    ctx.items.some((elem) => {
      if (elem.id == props.item.id) {
        if (e.target.value === "0") {
          ctx.deleteItem(props.item.id);
        } else if (elem.quantity < e.target.value) {
          ctx.addItem(props.item, e.target.value);
        } else if (elem.quantity > e.target.value) {
          ctx.removeItem(props.item, e.target.value);
        }
      }
    });
  };

  return (
    <>
      <div className="quantity">
        <input
          type="number"
          min={0}
          onChange={quantityHandler}
          defaultValue={props.item.quantity}
        />
      </div>
    </>
  );
};

export default QuantityChange;
