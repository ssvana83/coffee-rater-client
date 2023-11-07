import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/user';
import { useContext } from 'react';


const ReviewForm = ({ coffee, onAddReview }) => {

  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);
  const { user, setUser } = useContext(UserContext)

  const handleGoToSignUp = () => {
    navigate('/signup')
  }

  const handleGoToSignIn = () => {
    navigate('/signin')
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("reviews", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      review: body,
      cake_id: cake.id
    }),
  })
  .then(res => res.json())
  .then(data => {
    if (!data.errors) {
      setBody("")
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
              <button onClick={handleGoToSignUp}>Click here to Sign-Up</button>
              <button onClick={handleGoToSignIn}>Click here to Sign-In</button>
            </div>
          }
        </div>
      ))
      setErrors(errorList)
    }
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="review" value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Add Review</button>
      </form>
      {errors}
    </div>
  )
}
}
export default ReviewForm