import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/Signup"
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}

export default App