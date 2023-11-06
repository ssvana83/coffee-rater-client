import React, { useState, useEffect } from 'react'

const UserContext = React.createContext();                // This creates context

function UserProvider({ children}) {                      // This creates a provider component for children      
  const [user,setUser] = useState(null);  
                   
 

  useEffect(() => {
    fetch('/me')
    .then(r => {
      if (r.ok) {
      r.json()
      .then(data => 
        setUser(data))
      }
    })
  }, [])

  // this is the user in state;
  const signin = (user) => {
    setUser(user)
  }

  const signout = () => {
    setUser(null)
  }

  const signup = (user) => {
    setUser(user)
  }

  return (
    <UserContext.Provider value={{user, signin, signout, signup, setUser}}>                      
      {children}
    </UserContext.Provider>
  );
}
  


export { UserContext, UserProvider}


// UserProvider function provides to the children whatever I pass in as a value 
// Any child that hooks to global state can access whatevr I provide to them here
//wrap userContext around {children} and then be sure to export it 
// this gives me global state

// useEffect(() => {
//   fetch('/me')
//   .then(r => r.json())
//   .then(data => {
//       setUser(data)
//   })
// }, [])