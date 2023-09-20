import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import ItemsInCart from "./ItemsInCart";
const Backdrop1 = (props) => {
  const ctx = useContext(CartContext);
  
  const orderHandler=()=>{
    if(ctx.totalAmount>0) 
    {console.log("ordering......")}
  }
  return (
    <>
      <div className="backdrop">
        <div>
          <div className="modal">
            <div className="item">
              <div className="head">
                <label>Item</label>
                <h4>Quantity</h4>
              </div>
              <div className="disp">
                <ItemsInCart />
              </div>
            </div>
            <div className="Amount">
              <label>Total Amount</label>
              <label>{`$${ctx.totalAmount}`}</label>
            </div>
            <div className="buttons">
              <button onClick={() => props.onClick1()}>close</button>
              <button onClick={orderHandler}>order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backdrop1;
