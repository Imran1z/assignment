import React from 'react'
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Login from "./Pages/Login"
import SignUp from "./Pages/Signup"
import Header from './Component/Header';
import UserHome from './Pages/UserHome';
import AdminHome from './Pages/AdminHome';
import Maintenance from './Pages/Maintenance';
import AddUpdateUser from './Pages/AddUpdateUser';
import AddUpdateBook from './Pages/AddUpdateBooks';
import Reports from './Pages/Reports';
import MasterListOfBooks from './Pages/Reports/MasterBooks';
import Transactions from './Pages/Transaction';
import IsBookAvailable from './Pages/BookIssuePage';
import IssueBook from './Pages/IssueBook';
const App = () => {
  const isLoggedIn = localStorage.getItem('userData') !== null;
  const userData = JSON.parse(localStorage.getItem('userData'));
  const isAdmin = isLoggedIn && userData.type === 'admin';
  console.log(isAdmin)
  return (
    <Router>
    <Header/>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/reports" element={<Reports/>}/>
      <Route path="/admin/maintenance/add-update-user" element={isAdmin?<AddUpdateUser/>:<Navigate to='/userhome'/>}/>
      <Route path="/admin/maintenance/add-update-book" element={isAdmin?<AddUpdateBook/>:<Navigate to='/userhome'/>}/>
      <Route 
  path="/userhome" 
  element={!isAdmin ? <UserHome /> : <Navigate to='/adminhome' />} 
/>
      <Route path="/admin/maintenance" element={isAdmin?<Maintenance/>:<Navigate to='/userhome'/>}/>
      <Route path="/adminHome" element={isAdmin?<AdminHome/>:<Navigate to='/userhome'/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/transactions/issue-book" element={<IssueBook/>}/>
      <Route path="/transactions" element={<Transactions/>}/>
      <Route path="/transactions/is-book-available" element={<IsBookAvailable/>}/>
      <Route path="/reports/master-list-books" element={<MasterListOfBooks/>}/>
      </Routes>
    </Router>
  )
}

export default App