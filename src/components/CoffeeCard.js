import React, { useState} from 'react'
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';

const CoffeeCard = ({coffee, onAddReview, onDeleteCoffeeReview, onUpdateCoffeeReview}) => {

  const { name, coffee_origin, roaster_location, aroma, roast_level, reviews } = coffee;

  const [showCoffee, setShowCoffee] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const handleShowReviews = () => {
    setShowReviews(!showReviews)
  }
  
  return (
    <div className="card">
      <h2 className="header">{name}</h2>
        <p className="p">Coffee Origin: {coffee_origin} </p>
          <p className="p">Roaster Location: {roaster_location} </p>
            <p className="p">Aroma: {aroma} </p>
              <p className="p">Roast Level: {roast_level} </p>
                <button onClick={handleShowReviews}>
                    { showReviews ? "Hide Reviews": "Show Reviews"}
                </button>
                {showReviews && (
                  <>
                  <ReviewForm />
                  
                  <div>
                    <h3>Reviews: </h3>
                    <ul>
                      {reviews.map((review) => (
                        <li>{review.content}</li>
                      ))}
                    </ul>
                  </div>
                  </>
                )}
                    
    </div>
  )
}

export default CoffeeCard

// return (
//   <div className="card">
//     <h2 className="header">{name}</h2>
//       <p className="p">Coffee Origin: {coffee_origin} </p>
//         <p className="p">Roaster Location: {roaster_location} </p>
//           <p className="p">Aroma: {aroma} </p>
//             <p className="p">Roast Level: {roast_level} </p>
//               <button onClick={() => setShowReviews(!showReviews)}>
//                   { showReviews ? "Hide Reviews": "Show Reviews"}
//               </button>
                  
//   </div>


// {showCoffee && (
//   <div className="reviewcard">
//         <h3>Reviews: </h3>
//         <ul>
//           {reviews.map((review) => (
//           <li key={review.id}>
//             <p>Review: {review.content}</p>
//             <p>Username: </p>
            
//             {/* <ReviewCard 
//               coffee={coffee} 
//               coffee_reviews={coffee.reviews} 
//               onAddReview={onAddReview} 
//               onDeleteCoffeeReview={onDeleteCoffeeReview} 
//               onUpdateCoffeeReview={onUpdateCoffeeReview}
//             /> */}
//           </li>
//         ))}
//         </ul>
//       </div>
//     )}
//   </div>
// )
// }