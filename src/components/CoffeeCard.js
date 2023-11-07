import React, { useState } from 'react'
import ReviewForm from './ReviewForm';
import ReviewsList from './ReviewsList';

const CoffeeCard = ({ coffee }) => {

  const { name, coffee_origin, roaster_location, aroma, roast_level, reviews } = coffee;

  const [showCoffee, setShowCoffee] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const handleShowReviews = () => {
    setShowReviews(!showReviews)
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
      {showReviews && (
        <>
          <ReviewsList coffee={coffee} />
        </>
      )}
      <ReviewForm />
    </div>
  )
}

export default CoffeeCard

