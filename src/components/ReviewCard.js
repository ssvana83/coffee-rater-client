import React from 'react'
import ReviewForm from './ReviewForm'
import Review from './Review'

const ReviewCard = ({coffee, coffee_reviews, onAddReview, onDeleteCoffeeReview, onUpdateCoffeeReview}) => {

  let review_list = coffee_reviews.map((review) => (
    <Review
      key={review.id}
      reviewObj={review}
      coffee={coffee}
      onDeleteCoffeeReview={onDeleteCoffeeReview}
      onUpdateCoffeeReview={onUpdateCoffeeReview}
    />
  ))
  return (
    <div>
      <ReviewForm coffee={coffee} onAddReview={onAddReview}/>
      {review_list}
    </div>
  )
}

export default ReviewCard