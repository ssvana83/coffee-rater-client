import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import Coffees from './Coffees'
import CoffeesList from './CoffeesList'

const Home = ({coffees}) => {
  const { user } = useContext(UserContext)

  if (!user || user.error) {
    return (
    <div>
        <h3>Please Signin or Signup</h3>
      </div>)
  } else {
    return (
      <div>
        <h3>{user.username} Home</h3>
      </div>
    )
  }
}

export default Home