import React, { useState, useEffect } from 'react';
import ReviewsList from '../components/ReviewsList';

const ReviewsContainer = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost.3001/reviews")
    .then(r => r.json())
    .then(data => setReviews(data))
    .catch(err => alert(err))
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      <ReviewsList />
    </div>
    
  )
}

export default ReviewsContainer