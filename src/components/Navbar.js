import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from "../context/user"

const style = {
  width: "60%",
  margin: "5% 0 1%",
  padding: "1em",
  textDecoration: "none",
  color: "black",
  backgroundColor: "lightblue",
  fontWeight: "bold",
  verticalAlign: "center"
}


const Navbar = () => {
  const {user, signout, signedIn} = useContext(UserContext)
  const navigate = useNavigate()

  const handleSignout = () => {
    fetch('/signout', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(() => {
      signout()
      navigate('/')
    })
  }

  if (signedIn) {
    return (
        <div>
          <h1>Hello {user.username}</h1>
            <NavLink
              to="/"
              style={style}
            >Home</NavLink>

            <NavLink
              to="/coffees"
              style={style}
            >Coffees</NavLink>

            <NavLink
              to="/coffee/:id"
              style={style}
            >Coffee</NavLink>
      
            <button onClick={handleSignout}>Signout</button>
      </div>
    )
  } else {
    return (
      <div>
        <NavLink
        to="/"
        style={style}
        >Home</NavLink>
  
        <NavLink
        to="/signin"
        style={style}
        >Signin</NavLink>
  
        <NavLink
        to="/signup"
        style={style}
        >Signup</NavLink> 
  
        <NavLink
        to="/coffees"
        style={style}
        >Coffees</NavLink>
  
        <NavLink
        to="/coffee/:id"
        style={style}
        >Coffee</NavLink>
      </div>
    )
  }
}

export default Navbar