import './App.css';
import React from 'react';
import {useNavigate, Routes, Route } from 'react-router-dom';
import Register from './Auth/register';
import Login from './Auth/login';
//import Register from './Auth/register';

function App() {
 const navigate = useNavigate();
  return (
    <Routes>
      <Route path='/' element={<Login/>} /> 
      <Route path='/register' element={<Register nav={navigate}/>} /> 
    </Routes>
  );
}

export default App;
