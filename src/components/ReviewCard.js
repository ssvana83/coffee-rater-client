import React from 'react'
import ReviewForm from './ReviewForm'


const ReviewCard = ({ review }) => {
  
  const { content, user } =review;
  const username = review.username
  

  return (
    <div className="card">
      <h2 className="p" >{review.content}</h2>
      <p className="p" >Review written by: {username}</p>
    </div>
  )
}

export default ReviewCard