import React, { Fragment, cloneElement } from "react";
import mealimg from "../../images/meals.jpg";
import classes from "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.openCart1}/>
        <h1></h1>
      </header>
      <div className="main-image">
       
          {" "}
          <img src={mealimg} />

      </div>
    </Fragment>
  );
}
