import './App.css';
import React from 'react';
import {useNavigate, Routes, Route } from 'react-router-dom';
import Register from './Auth/register';
import Login from './Auth/login';
import Home from './Pages/Home';
import About from './Pages/About';
import Report from './Pages/Report';
import Dashboard from './Pages/Dashboard';
import Story from './Pages/Story';
import Contact from './Pages/Contact';
//import Register from './Auth/register';

function App() {
 const navigate = useNavigate();
  return (
    <Routes>
      <Route path='/' element={<Login nav={navigate} />} /> 
      <Route path='/register' element={<Register nav={navigate}/>} /> 
      <Route path='/home' element={<Home/>} /> 
      <Route path='/about' element={<About/>} /> 
      <Route path='/report' element={<Report/>} /> 
      <Route path='/dash' element={<Dashboard/>} /> 
      <Route path='/story' element={<Story/>} /> 
      <Route path='/contact' element={<Contact/>} /> 
    </Routes>
  );
}

export default App;
