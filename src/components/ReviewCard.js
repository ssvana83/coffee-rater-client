import React, { useState, useEffect }from 'react'
import ReviewForm from './ReviewForm'
import { useContext } from 'react'
import { UserContext } from '../context/user'


const ReviewCard = ({ review }) => {
  const { user, setUser } = useContext(UserContext)
  
  const username = review.username
  console.log(user)
  

  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (user.id == review.user_id) {
      setShowButton(true)
    }
  }, []) 

  return (
    <div className="card">
      <h2 className="p" >{review.content}</h2>
      <p className="p" >Review written by: {username}</p>
      {showButton? (
        <button>Update my Review</button>
      ) : (null)}
    </div>
  )
}

export default ReviewCard