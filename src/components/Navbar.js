import React from 'react'
import { NavLink } from 'react-router-dom'

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
      to="/signout"
      style={style}
      >Signout</NavLink>

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

<NavLink
      ></NavLink>
    </div>
  )
}

export default Navbar