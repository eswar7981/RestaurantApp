import React from "react";
import "./Meals.css";
import AddButton from "./AddButton";
const Meals = (props) => {
  const menu = props.menu;
  return (
    <div className="Meals">
      {menu.map((item) => (
        <>
        <div className="display">
        <div className="item">

          <h1 style={{fontSize:'20px'}}>{item.Name}</h1>
          <label style={{fontFamily:'Brush Script MT'}}>{item.Description}</label>
          <h3 style={{color:' #8a2b06',border:'solid',borderColor:'black',marginRight:'520px'}}>{item.price}</h3>
         
         
        </div>
        <div className="ad">
        <AddButton></AddButton>
        </div>
        
        </div>
        </>
      ))}
    </div>
  );
};

export default Meals;
