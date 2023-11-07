import React from 'react'
import CoffeeCard from './CoffeeCard'

const CoffeesList = ({coffees}) => {
  const renderCoffees = coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} />)
  return (
    <div>CoffeesList</div>
  )
}

export default CoffeesList