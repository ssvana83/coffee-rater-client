import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/user'
import CoffeeCard from './CoffeeCard'

const MyCoffeesList = () => {
  const { user, setUser } = useContext(UserContext)

  const renderMyCoffees = user.coffees.map(c => <li key={c.id}>{c.name}</li>)
  return (
    <div>
      <ul>{renderMyCoffees}</ul>
          </div>
  )
}

export default MyCoffeesList