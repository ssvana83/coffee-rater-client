import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditReviewForm = ({ onUpdateCoffeeReview, review }) => {
  const [reviewValues, setReviewValues] = useState({content: review.content})
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({content: reviewValues.content})
    })
      .then((res) => res.json()
      .then((updatedCoffees) => onUpdateCoffeeReview(updatedCoffees))
      
  )
      navigate ('/coffees')
}
  
  return (
    <>
            <h3>Edit Review</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Review</label>
                <input type="text" name="title" value={reviewValues.content} placeholder="edit this review here" onChange={(e) => setReviewValues({...reviewValues, content: e.target.value})} /><br />
                
                <input type="submit" value="Edit Review" />
            </form>
        </>
  )
}

export default EditReviewForm