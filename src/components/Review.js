import React from 'react'
import { UserContext } from '../context/user'
import { useContext } from 'react'
import ReviewCard from './ReviewCard'


const Review = ({coffee, onDeleteCoffeeReview, onUpdateCoffeeReview, reviewObj}) => {
  return (
    <div>
      <ReviewCard />
    </div>
  )
}

export default Review