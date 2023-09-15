import logo from './logo.svg';
import './App.css';
import MealsSummary from './Components/Meals/MealsSummary';
import { Fragment, useEffect, useState } from 'react';
import Header from './Components/Layout/Header';
function App() {

 

  return (
    <Fragment>
      <Header/>

      <MealsSummary/>
   
    </Fragment>

  );
}

export default App;

