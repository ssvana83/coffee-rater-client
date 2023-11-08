import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/user'

const MyReviews = () => {
  const { user, setUser } = useContext(UserContext)
  const renderMyReviews = user.reviews.map(r => <li key={r.id}>{r.content}</li>)
  return (
    <div>{renderMyReviews}</div>
  )
}

export default MyReviews