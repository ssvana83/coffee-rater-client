// import React, { useState, useEffect } from 'react';
// import CoffeesList from '../components/CoffeesList';


// const CoffeesContainer = () => {
//   const [coffees, setCoffees] = useState([]);
  
//   useEffect(() => {
//     fetch("http://localhost.3001/coffees")
//     .then(r => r.json())
//     .then(data => setCoffees(data))
//     .catch(err => alert(err))
//   }, []);


//   return (
//     <div>
//       <h2>Coffees</h2>
//       <CoffeesList />
//     </div>
//   )
// }

// export default CoffeesContainer