import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <NavLink
      >Home</NavLink>

      <NavLink
      >Signin</NavLink>

      <NavLink
      >Signup</NavLink>

<NavLink
      ></NavLink>
    </div>
  )
}

export default Navbar