import React from "react";
import "./Meals.css";
import AddButton from "./AddButton";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
const Meals = (props) => {
  const menu = props.menu;

  return (
    <div className="Meals">
      {menu.map((item) => (
        <li key={item.id}>
          <div className="display">
            <div className="item">
              <h1 style={{ fontSize: "20px" }}>{item.Name}</h1>
              <label style={{ fontFamily: "Brush Script MT" }}>
                {item.Description}
              </label>
              <h3
                style={{
                  color: " #8a2b06",
                  border: "solid",
                  borderColor: "black",
                  marginRight: "520px",
                }}
              >{`$${item.price.toFixed(2)}`}</h3>
            </div>
            <div className="ad">
              <AddButton item={item}></AddButton>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Meals;
