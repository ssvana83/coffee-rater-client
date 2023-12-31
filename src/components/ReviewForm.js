import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/user';
import { useContext } from 'react';


const ReviewForm = ({ coffee, onAddReview, onUpdateCoffeeReview }) => {

  const [errors, setErrors] = useState([]);
  const [review, setReview] = useState("")
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: review, 
        coffee_id: coffee.id,
        user_id: user.id
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (!data.errors) {
          onAddReview(data)
          setReview("")
          
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
    }
        
  

  return (
    <>
      <h3 className="p" >Create a Review for this Coffee</h3>
      <form className="p" onSubmit={handleSubmit} onUpdateCoffeeReview={onUpdateCoffeeReview} >
        <label htmlFor="content">Review</label>
        <input onChange={(e) => setReview(e.target.value)} type="text" name="review" value={review} /><br />
        <input type="submit" value="Submit Review"/>
      </form>
    </>
  )
}

export default ReviewForm