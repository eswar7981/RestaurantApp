import logo from './logo.svg';
import './App.css';
import MealsSummary from './Components/Meals/MealsSummary';
import { Fragment, useEffect, useState } from 'react';
import Header from './Components/Layout/Header';
import mealimg from './images/meals.jpg'
import AvailableMeals from './Components/Meals/AvailableMeals';

import Portal from './Components/Portal/Portal';

function App() {

 

  return (
   
  
    <Fragment>
      
      <Header/>
      
      <MealsSummary/>
      
      <AvailableMeals/>
      <Portal/>
  
      
   
    </Fragment>

  );
}

export default App;

