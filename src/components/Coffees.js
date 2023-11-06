import React from 'react';
import CoffeeCards from "./CoffeeCards";
import "../Styles.css";


const Coffees = ({coffees}) => {

  let coffeeList = coffees.map((coffee) => (
    <CoffeeCards 
      key={coffee.id}
      coffee={coffee}
    />
  ))
  return (
    <div>
      
      <h1>{coffeeList}</h1>
    </div>
  )
}

export default Coffees