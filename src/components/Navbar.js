import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
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
  const{user,signout} = useContext(UserContext)

  const signoutUser = () => {
    fetch('/signout')
    .then(() => {
      signout()
    })
  }

  if (user) {
    return (
        <div>
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
      
            <button onClick={signoutUser}>Signout</button>
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