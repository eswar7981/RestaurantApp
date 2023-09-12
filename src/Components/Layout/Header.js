import React, { Fragment, cloneElement } from "react";
import mealimg from '../../images/meals.jpg'
import classes from "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header() {
  return (
    <Fragment>
    <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
        <h1></h1>
       
        
    </header>
    <div className='main-image'>
        <img src={mealimg}/>
    </div>
    </Fragment>
  );
}
