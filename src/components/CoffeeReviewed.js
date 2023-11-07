import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/user'

const CoffeeReviewed = () => {

  const {user} = useContext(UserContext)
  const theCoffees = user.coffees.map(c => <li key={c.id}>{c.name}</li>)
  return (
    <div>
      <ul>
        {theCoffees}
      </ul>
    </div>
  )
}

export default CoffeeReviewed