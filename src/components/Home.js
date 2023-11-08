import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import Coffees from './Coffees'
import CoffeesList from './CoffeesList'

const Home = ({coffees, onAddReview, onDeleteCoffeeReview, onUpdateCoffeeReview}) => {
  const { user } = useContext(UserContext)

  if (!user || user.error) {
    return (
    <div>
      <h3>Please Signin or Signup</h3>
      <CoffeesList coffees={coffees} />
      </div>)
  } else {
    return (
      <div>
        <h3>{user.username} Home</h3>
        <h1>
          <CoffeesList coffees={coffees} onAddReview={onAddReview} onDeleteCoffeeReview={onDeleteCoffeeReview} onUpdateCoffeeReview={onUpdateCoffeeReview}/>
        </h1>
      </div>
    )
  }
}

export default Home