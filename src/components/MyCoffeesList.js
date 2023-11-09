import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/user'

const MyCoffeesList = () => {
  const { user, setUser } = useContext(UserContext)

  const renderMyCoffees = user.coffees.map(c => (
    <li key={c.id}>
      <div className="coffee-item">
        <h3>{c.name}</h3>
        <p>
          <strong>Origin:</strong> {c.coffee_origin}
        </p>
      </div>
    </li>
  ));

  return (
    <div>
      <h2>My Reviewed Coffees</h2>
      {renderMyCoffees}
    </div>
  )
}



export default MyCoffeesList

