import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/user'
import ReviewCard from './ReviewCard'


const MyReviews = ({onUpdateCoffeeReview}) => {
  
  const { user, setUser } = useContext(UserContext)
  const renderMyReviews = user.reviews.map(r => <ReviewCard key={r.id} review={r} onUpdateCoffeeReview={onUpdateCoffeeReview}/>)
  
  return (
    <div>{renderMyReviews}</div>
  )
}

export default MyReviews

//  onUpdateCoffeeReview={handleUpdateReview}