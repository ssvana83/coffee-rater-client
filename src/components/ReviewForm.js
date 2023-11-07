import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/user';
import { useContext } from 'react';


const ReviewForm = ({ coffee, onAddReview }) => {

  const [errors, setErrors] = useState([]);
  const [content, setContent] = useState("");
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()
  

  const handleGoToSignUp = () => {
    navigate('/signup')
  }

  const handleGoToSignIn = () => {
    navigate('/signin')
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      review: content,
      coffee_id: coffee.id
    }),
  })
  .then(res => res.json())
  .then(data => {
    if (!data.errors) {
      setContent("")
      onAddReview(data)
      setUser({
        ...user,coffees: [...user.coffees, coffee]
      })
    } else {
      const errorList = data.errors.map((e) => (
        <div key={e}>
          <ul style={{color:"red"}}>{e}</ul>
          {user.id ? "" :
            <div>
              
            </div>
          }
        </div>
      ))
      setErrors(errorList)
    }
  })

  return (
    <div>
      <h3>Create a Review for this Coffee</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">Review</label>
        <input type="text" id="review" value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Add Review</button>
      </form>
      {errors}
    </div>
  )
}
}
export default ReviewForm