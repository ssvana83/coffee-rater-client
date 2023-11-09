import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { UserProvider } from "./context/user"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import ReviewsContainer from './containers/ReviewsContainer';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { formControlClasses } from '@mui/material';
import CoffeesList from './components/CoffeesList';
import MyCoffeesList from './components/MyCoffeesList';
import MyReviews from './components/MyReviews';
import { useContext } from 'react'
import { UserContext } from './context/user';


function App() {
  const [coffees, setCoffees] = useState([]);
  const user = useContext(UserContext)

  useEffect(() => {
    fetch("/coffees")
      .then((r) => r.json())
      .then((r) => setCoffees(r))
  }, [])

  function handleDeleteReview(deletedReview) {
    const coffeeReviewList = coffees.find(c => c.id === deletedReview.coffee_id).reviews
    console.log(coffeeReviewList)
    const updatedReviews = coffeeReviewList.filter((r) => r.id !== deletedReview.id)
    console.log(updatedReviews)
    console.log(updatedCoffees)
    const updatedCoffees = coffees.map((c) => {
      if (c.id === deletedReview.coffee_id) {
        return { ...c, reviews: updatedReviews }
      } else {
        return c;
      }
    })
    setCoffees(updatedCoffees)
  }

  function handleUpdateReview(updatedReview) {
    // added line below;
    const coffeeId = updatedReview.coffee_id
    // now find coffee associated with the review;
    const coffeeReviews = coffees.find(c => c.id === updatedReview.coffee_id).reviews
    // now update the reviews for the coffee
    const updatedReviews = coffeeReviews.map((r) => {
        return r.id === updatedReview.id ? updatedReview : r;
    });
    // now update the coffees state
    const updatedCoffees = coffees.map((c) => {
        return c.id === coffeeId ? { ...c, reviews: updatedReviews } : c;
    });
    // now update user state
    if (user && user.reviews) {
    const updatedUserReviews = user.reviews.map((r) => (r.id === updatedReview.id ? updatedReview : r));
    // Update User state
    user.setUser({...user, reviews: updatedUserReviews });
    }
    //
    setCoffees(updatedCoffees); 
  }
    

  return (
    <div className="container">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/myreviews" element={<MyReviews coffees={coffees} onUpdateCoffeeReview={handleUpdateReview} onDeleteCoffeeReview={handleDeleteReview}/>}/>
          <Route exact path="/coffeesreviewed" element={<MyCoffeesList coffees={coffees} />}/>
          <Route exact path="/coffees" element={<CoffeesList coffees={coffees} setCoffees={setCoffees} onUpdateCoffeeReview={handleUpdateReview}/>} />
          <Route exact path="/reviews" element={<ReviewsContainer />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home coffees={coffees} onDeleteCoffeeReview={handleDeleteReview} onUpdateCoffeeReview={handleUpdateReview} />}></Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
