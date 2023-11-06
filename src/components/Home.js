import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import Coffees from './Coffees'

const Home = ({coffees, onAddReview}) => {
  const { user } = useContext(UserContext)

  if (!user || user.error) {
    return (
    <div>
      <h3>Please Signin or Signup</h3>
      <Coffees coffees={coffees}/>
      </div>)
  } else {
    return (
      <div>
        <h3>{user.username} Home</h3>
        <h1>
          <Coffees coffees={coffees} onAddReview={onAddReview}/>
        </h1>
      </div>
    )
  }
}

export default Home