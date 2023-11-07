import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewsList = ({ coffee }) => {
  const reviews = coffee.reviews
  const renderReviews = reviews.map(review => <ReviewCard key={review.id} review={review} />)
  return (
    <div className="header">Reviews List
      {renderReviews}
    </div>
  )
}

export default ReviewsList