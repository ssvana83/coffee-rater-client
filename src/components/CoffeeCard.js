import React, { useState } from 'react'
import ReviewForm from './ReviewForm';
import ReviewsList from './ReviewsList';
import { useContext } from 'react'
import { UserContext } from '../context/user'

const CoffeeCard = ({ coffee, coffees, setCoffees, onUpdateCoffeeReview }) => {
  const { user, setUser } = useContext(UserContext)
  const { name, coffee_origin, roaster_location, aroma, roast_level, reviews } = coffee;
  const [showCoffee, setShowCoffee] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showSignInMsg, setShowSignInMsg] = useState(false);

  const handleShowReviews = () => {
    if (!user) {
      setShowSignInMsg(true);
    } else {
      setShowReviews(!showReviews);
    }
  };

  const handleAddReviewButton = () => {
    if (!user) {
      setShowSignInMsg(true);
    } else {
      setShowReviewForm(!showReviewForm)
    }
  }

  const handleAddReview = (newReview) => {
    const coffeeWithNewReview = [...coffee.reviews, (newReview)]
    const copyCoffeeReview = { ...coffee, reviews: coffeeWithNewReview }
    const userWithNewReview = { ...user, reviews: [...user.reviews, (newReview)] }
    const coffeesWithNewReview = coffees.map(coffee => {
      if (copyCoffeeReview.id === coffee.id) {
        return copyCoffeeReview
      } else {
        return coffee
      }
    })
    setUser(userWithNewReview)
    setCoffees(coffeesWithNewReview)
  }

  return (
    <div className="card">
        <h2 className="header">{name}</h2>
        <p className="p">Coffee Origin: {coffee_origin} </p>
        <p className="p">Roaster Location: {roaster_location} </p>
        <p className="p">Aroma: {aroma} </p>
        <p className="p">Roast Level: {roast_level} </p>

        <button onClick={handleShowReviews}>
          {showReviews ? "Hide Reviews" : "Show Reviews"}
        </button>
          {showReviews && <ReviewsList coffee={coffee} />}
        <button onClick={handleAddReviewButton}>
          {showReviewForm ? "Hide Review Form" : "Add a Review"}
        </button>
          {showSignInMsg && <p>Please sign in to create a review or see reviews!</p>}
          {showReviewForm && (<ReviewForm coffee={coffee} onAddReview={handleAddReview} onUpdateCoffeeReview={onUpdateCoffeeReview} />
        )}
    </div>
  )

}

export default CoffeeCard

