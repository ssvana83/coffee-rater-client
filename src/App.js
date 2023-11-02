import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/user"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Coffees from "./components/Coffees"
import Coffee from "./components/Coffee"
import Signin from './components/Signin';


function App() {


  return (
    <div className="container">
      <UserProvider>
        
          <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/coffees" element={<Coffees />}></Route>
              <Route exact path="/coffee/:id" element={<Coffee />}></Route>
              <Route exact path="/signin" element={<Signin />}/>
            </Routes>
        
      </UserProvider>
    </div>
  );
}

export default App;
