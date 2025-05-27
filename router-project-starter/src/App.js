import "./App.css";
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import {Routes,Route} from 'react-router-dom';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Dashboard from './pages/Dashboard.js';
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute.js";
function App() {
  const [isLoggedin,setIsLoggedin]=useState(false);
  return (
    <div className="w-screen h-full bg-richblack-900 flex flex flex-col">
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedin={setIsLoggedin}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedin={setIsLoggedin}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedin={isLoggedin}>
             <Dashboard/>
          </PrivateRoute>
      }/>
      </Routes>
    </div>
  );
}

export default App;
