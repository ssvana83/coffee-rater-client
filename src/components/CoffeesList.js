import React from 'react'
import CoffeeCard from './CoffeeCard'

const CoffeesList = ({ coffees }) => {
  const renderCoffees = coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} />)
  return (
    <div>{renderCoffees}</div>
  )
}

export default CoffeesList