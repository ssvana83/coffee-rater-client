import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"


function App() {


  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
