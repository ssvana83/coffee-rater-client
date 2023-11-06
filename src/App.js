import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from 'react'; 
import { UserProvider } from "./context/user"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Coffees from "./components/Coffees"
import Coffee from "./components/Coffee"
import Signin from './components/Signin';
import Signup from './components/Signup';
import { formControlClasses } from '@mui/material';

function App() {

  // added this to put coffees state here to display coffees 
  const [coffees, setCoffees] = useState([]);
  
  // added this to fetch all coffees from state 
  useEffect(() => {
    fetch("/coffees")
    .then((r) => r.json())
    .then((r) => setCoffees(r))
  }, [])

  return (
    <div className="container">
      <UserProvider>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<Home coffees = {coffees}/>}></Route>
              <Route exact path="/signin" element={<Signin />}/>
              <Route exact path="/signup" element={<Signup />}/>
              <Route exact path="/coffees" element={<Coffees />}></Route>
              <Route exact path="/coffee/:id" element={<Coffee />}></Route>
            </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
