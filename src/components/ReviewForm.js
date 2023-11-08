import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/user';
import { useContext } from 'react';


const ReviewForm = ({ coffee, onAddReview }) => {

  const [errors, setErrors] = useState([]);
  const [review, setReview] = useState("")

  // const [content, setContent] = useState("");
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  // const handleChange = (e) => {
  //   setReview({
  //     ...review,
  //     [e.target.name]: e.target.value
  //   })
  // }git add .

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: review, 
        coffee_id: coffee.id
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
      <form className="p" onSubmit={handleSubmit}>
        <label htmlFor="content">Review</label>
        <input onChange={(e) => setReview(e.target.value)} type="text" name="review" value={review} /><br />
        <input type="submit" value="Submit Review"/>
      </form>
    </>
  )
}

export default ReviewForm