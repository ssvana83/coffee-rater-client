import React, { useState} from 'react'

const CoffeeCards = ({coffee}) => {

  const { name, coffee_origin, roaster_location, aroma, roast_level } = coffee;

  const [showCoffee, setShowCoffee] = useState(false);
  return (
    <div className="card">
      <h2 className="header">{name}</h2>
      <p className="p">Coffee Origin: {coffee_origin} </p>
      <p className="p">Roaster Location: {roaster_location} </p>
      <p className="p">Aroma: {aroma} </p>
      <p className="p">Roast Level: {roast_level} </p>
    </div>
  )
}

export default CoffeeCards