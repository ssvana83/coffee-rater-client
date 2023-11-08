import React from 'react'
import CoffeeCard from './CoffeeCard'
import { useContext } from 'react'
import { UserContext } from '../context/user'


const CoffeesList = ({ coffees, setCoffees }) => {
console.log(coffees)
  const { user, setUser } = useContext(UserContext)
  

  // function handleAddReview(newReview) {
  //   const updatedCoffees = coffees.map((c) => {
  //     if (c.id === newReview.coffee_id) {
  //       return ({ ...c, reviews: [...c.reviews, newReview] })
  //     } else {
  //       return c
  //     }
  //   })
  //   setCoffees(updatedCoffees)
  // }



  const renderCoffees = coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}/>)



  return (
    <div>{renderCoffees}</div>
  )
}

export default CoffeesList