import React, { useState } from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import TableBookingForm from './pages/book table/table';
import Regi from './pages/book table/reg/regi';
import Login from './pages/book table/login/login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/book table/Home';
import Menu from './pages/Menu/Menu';



const App = () => {
  const [user,setUser]=useState({})
  const [login,setLogin]=useState(false)
  return(
  <Router>
    <Routes>
      <Route path='/' element={(login===true)?<Home/>:<Login setUser={setUser} setLogin={setLogin}/>}/>
      <Route path='/register' element={<Regi/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='bookTable' element={<TableBookingForm user={user} setUser={setUser}/>}/>
    </Routes>
  </Router>
)
}

export default App;
