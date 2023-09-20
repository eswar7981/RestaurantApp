import React from "react";
import Meals from "./Meals";
import { useState } from "react";

const AvailableMeals = () => {
  const [Menu, setMenu] = useState([
    {
      id: "m1",
      Name: "Sushi",
      Description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      Name: "Schnitzel",
      Description: "A german speciality!",
      price: 16.5,
    },
    {
      id: "m3",
      Name: "Barbecue Burger",
      Description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      Name: "Green Bowl",
      Description: "Healthy... and green",
      price: 18.0,
    },
  ]);

  return (
    <>
      <div>
        <Meals menu={Menu}></Meals>
      </div>
    </>
  );
};

export default AvailableMeals;

