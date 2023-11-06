import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import Coffees from './Coffees'

const Home = ({coffees}) => {
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
          <Coffees coffees={coffees}/>
        </h1>
      </div>
    )
  }
}

export default Home