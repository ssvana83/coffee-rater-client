import React from 'react'
import CoffeeCard from './CoffeeCard'
import { useContext } from 'react'
import { UserContext } from '../context/user'


const CoffeesList = ({ coffees, setCoffees }) => {
  const { user, setUser } = useContext(UserContext)
  const renderCoffees = coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}/>)

  return (
    <div>{renderCoffees}</div>
  )
}

export default CoffeesList