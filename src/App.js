import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import {UserStorage} from './Contexts/UserContext';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <UserStorage>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login/*" element={<Login/>}/>
        </Routes>
        <Footer/>
      </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
