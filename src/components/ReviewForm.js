import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/user';
import { useContext } from 'react';


const ReviewForm = ({ coffee, onAddReview }) => {

  const [errors, setErrors] = useState([]);
  const [review, setReviews] = useState({
    content: ""
  })

  const [content, setContent] = useState("");
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setReviews({
      ...review,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if([review.content].some(val => val.trim() === "")) {
      alert("you must fill all fields")
    }

    fetch("/reviews", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      },
      body: JSON.stringify({review: content}),
    })
      .then((resp) => {
        if (resp.status === 201) {
            navigate("/reviews")
        } else {
            resp.json().then(errorObj => setErrors(errorObj.error))
        }
    })
    .catch(err => setErrors(err.message))
  }

  return (
    <>
      <h3 className="p" >Create a Review for this Coffee</h3>
      <form className="p" onSubmit={handleSubmit}>
        <label htmlFor="content">Review</label>
        <input onChange={handleChange} type="text" id="review" value={content} /><br />
        <input type="submit" value="Submit Review"/>
      </form>
    </>
  )
}

export default ReviewForm