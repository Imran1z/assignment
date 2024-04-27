import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Pages/Login"
import SignUp from "./Pages/Signup"
import Header from './Component/Header';
import UserHome from './Pages/UserHome';
import AdminHome from './Pages/AdminHome';
import Maintenance from './Pages/Maintenance';
import AddUpdateUser from './Pages/AddUpdateUser';
import AddUpdateBook from './Pages/AddUpdateBooks';
const App = () => {
  return (
    <Router>
    <Header/>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin/maintenance/add-update-user" element={<AddUpdateUser/>}/>
      <Route path="/admin/maintenance/add-update-book" element={<AddUpdateBook/>}/>
      <Route path="/userHome" element={<UserHome/>}/>
      <Route path="/admin/maintenance" element={<Maintenance/>}/>
      <Route path="/adminHome" element={<AdminHome/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}

export default App