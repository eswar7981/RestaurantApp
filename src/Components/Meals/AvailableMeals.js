import React from "react";
import Meals from "./Meals";
import { useState } from "react";
const AvailableMeals = () => {
  const [Menu,setMenu] = useState([
    { Name: "Sushi", Description: "Finest fish and veggies", price: "$22.99" },
    { Name: "Schnitzel", Description: "A german speciality!", price: "$16.50" },
    {
      Name: "Barbecue Burger",
      Description: "American, raw, meaty",
      price: "$12.99",
    },
    {
      Name: "Green Bowl",
      Description: "Healthy... and green",
      price: "$18.00",
    },
  ]);
  console.log(Menu);
  return (
    <>
    <div>
      <Meals menu={Menu}></Meals>
    </div>
    </>
  );
};

export default AvailableMeals;
