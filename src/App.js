import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { UserProvider } from "./context/user"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import CoffeesContainer from './containers/CoffeesContainer';
import ReviewsContainer from './containers/ReviewsContainer';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { formControlClasses } from '@mui/material';
import CoffeesList from './components/CoffeesList';

function App() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("/coffees")
      .then((r) => r.json())
      .then((r) => setCoffees(r))
  }, [])

  // function handleReview(newReview) {
  //   const updatedCoffees = coffees.map((c) => {
  //     if (c.id === newReview.coffee_id) {
  //       return ({ ...c, reviews: [...c.reviews, newReview] })
  //     } else {
  //       return c
  //     }
  //   })
  //   setCoffees(updatedCoffees)
  // }

  function handleDeleteReview(deletedReview) {
    const coffeeReviewList = coffees.find(c => c.id === deletedReview.coffee_id).reviews
    const updatedReviews = coffeeReviewList.filter((r) => r.id !== deletedReview.id)
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
    const coffeeReviews = coffees.find(c => c.id === updatedReview.coffee_id).reviews
    const updatedReviews = coffeeReviews.map((r) => {
      if (r.id === updatedReview.id) {
        return updatedReview
      } else {
        return r;
      }
    });

    const updatedCoffees = coffees.map((c) => {
      if (c.id === updatedReview.coffee_id) {
        return { ...c, reviews: updatedReviews }
      } else {
        return c;
      }
    })
    setCoffees(updatedCoffees)
  }

  return (
    <div className="container">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/coffees" element={<CoffeesList coffees={coffees} setCoffees={setCoffees} />} />
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
