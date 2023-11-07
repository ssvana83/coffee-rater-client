import React from 'react';
import CoffeeCard from "./CoffeeCard";
import "../Styles.css";


const Coffees = ({coffees, onAddReview, onDeleteCoffeeReview, onUpdateCoffeeReview}) => {

  let coffeeList = coffees.map((coffee) => (
    <CoffeeCard 
      key={coffee.id}
      coffee={coffee}
      onAddReview={onAddReview}
      onDeleteCoffeeReview={onDeleteCoffeeReview}
      onUpdateCoffeeReview={onUpdateCoffeeReview} 
    />
  ))
  return (
    <div>
      <h1>{coffeeList}</h1>
    </div>
  )
}

export default Coffees