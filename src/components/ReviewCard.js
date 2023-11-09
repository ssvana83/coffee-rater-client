import React, { useState, useEffect }from 'react'
import EditReviewForm from './EditReviewForm'
import { useContext } from 'react'
import { UserContext } from '../context/user'


const ReviewCard = ({ review, onUpdateCoffeeReview, onDeleteCoffeeReview }) => {
  const { user, setUser } = useContext(UserContext)
  const username = review.username
  const [showButton, setShowButton] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)

  useEffect(() => {
    if (user.id == review.user_id) {
      setShowButton(true)
    }
  }, []) 

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm)
  };

  const handleDeleteReview = () => {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE",
    })
    .then((r) => {
      console.log(r)
      if (r.ok) {
        onDeleteCoffeeReview(review)
      }
    })
  }
  
  

  return (
    <div className="card">
      <h2 className="p" >{review.content}</h2>
      <p className="p" >Review written by: {username}</p>
      {showButton? (
        <div>
        <button onClick={toggleEditForm}>Update my Review</button>
        {showEditForm && <EditReviewForm review={review} onUpdateCoffeeReview={onUpdateCoffeeReview}/>}
        </div>
      ) : (null)}
        <button onClick={handleDeleteReview}>Delete Review</button>
    </div>
  )
}

export default ReviewCard