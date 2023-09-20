import React, { useContext } from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
import { useState } from "react";

import CartContext from "../Store/CartContext";

export default function HeaderCartButton(props) {
  const cartctx = useContext(CartContext);

  const count=cartctx.items.reduce((curr,item)=>curr+parseInt(item.quantity),0)
  
  return (
    <div>
      <button className="button" onClick={() => props.onClick()}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{count}</span>
      </button>
    </div>
  );
}
