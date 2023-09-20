import React, { useState } from "react";
import CartContext from "./CartContext";

const Cartprovider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCart = (item, quantity) => {
    const itemIsPresent = items.some((el) => {
      if (el.id === item.id) {
        return true;
      }
      return false;
    });

    if (itemIsPresent) {
      const state = items.map((obj) => {
        if (obj.id === item.id) {
          return {
            ...obj,
            quantity: parseInt(obj.quantity) + 1,
          };
        }

        return obj;
      });
      const p = parseFloat(totalAmount) + parseFloat(item.price);

      const a = p.toFixed(2);
      setTotalAmount(a);
      updateItems(state);
    } else {
      updateItems([...items, item]);
      const p = parseFloat(totalAmount) + parseFloat(item.price) * quantity;
      const a = p.toFixed(2);
      setTotalAmount(a);
    }
  };

  const removeItemfromCart = (item, quant) => {
    const itemIsPresent = items.some((elem) => {
      if (elem.id == item.id) {
        return true;
      } else {
        return false;
      }
    });

    if (itemIsPresent) {
      const state = items.map((obj) => {
        if (obj.id === item.id) {
          return {
            ...obj,
            quantity: parseInt(obj.quantity) - 1,
          };
        }
        return obj;
      });
      const p = parseFloat(totalAmount) - parseFloat(item.price);

      const a = p.toFixed(2);
      setTotalAmount(a);
      updateItems(state);
    }
    if (!itemIsPresent) {
      console.log("hii");
    }
  };

  const deleteItemfromCart = (id) => {
    updateItems(items.filter((item) => item.id !== id));
    setTotalAmount(0);
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemfromCart,
    deleteItem: deleteItemfromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Cartprovider;
