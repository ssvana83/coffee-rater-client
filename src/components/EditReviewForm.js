import React, { useState } from 'react'

const EditReviewForm = ({onUpdateCoffeeReview}) => {
  const [review, setReview] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review)
    })
      .then((res) => res.json())
      .then(updatedCakes => onUpdateCoffeeReview(updatedCakes))
  }
  
  return (
    <>
            <h3>Edit Review</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={review} onChange={(e) =>setReview(e.target.value)} /><br />
                
                <input type="submit" value="Edit Review" />
            </form>
        </>
  )
}

export default EditReviewForm