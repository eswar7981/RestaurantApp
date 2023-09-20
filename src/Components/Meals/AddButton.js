import React, { useContext, useState } from "react";
import "./AddButton.css";
import CartContext from "../Store/CartContext";
const AddButton = (props) => {
  const [quantity, setQuantity] = useState(0);
  const cxt = useContext(CartContext);

  const cartAddHandler = (e) => {
    e.preventDefault();
    if(parseInt(quantity)>0){
      
    cxt.addItem({ ...props.item, quantity }, quantity);
     setQuantity(0)
  }};

  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      <form>
        <div className="first-row">
          <label htmlFor="add">Amount</label>&nbsp;&nbsp;&nbsp;
          <input
            value={quantity}
            type="number"
            min={0}
            id="add"
            onChange={quantityHandler}
          ></input>
          <br></br>
          <button onClick={cartAddHandler}>+ Add</button>
        </div>
      </form>
    </>
  );
};

export default AddButton;

