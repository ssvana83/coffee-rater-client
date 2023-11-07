import React from 'react'
import ReviewForm from './ReviewForm'


const ReviewCard = ({ review }) => {

  return (
    <div className="card">
      <h2 className="p">{review.content}</h2>
    </div>
  )
}

export default ReviewCard