import React from 'react'
import ReviewForm from './ReviewForm'


const ReviewCard = ({ review }) => {

  return (
    <div className="card">
      <h2 className="p" >{review.content}</h2>
      <p className="p" >Review written by:</p>
    </div>
  )
}

export default ReviewCard