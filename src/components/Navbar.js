import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <NavLink
      to="/"
      >Home</NavLink>

      <NavLink
      to="/signin"
      >Signin</NavLink>

      <NavLink
      to="/coffees"
      >Coffees</NavLink>

      <NavLink
      to="/coffee/:id"
      >Coffee</NavLink>

<NavLink
      ></NavLink>
    </div>
  )
}

export default Navbar