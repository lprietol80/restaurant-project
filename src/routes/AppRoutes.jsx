import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import OrderOnline from '../pages/OrderOnline';
import Reservations from '../pages/Reservations';

function AppRoutes (){
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/orderonline" element={<OrderOnline/>} />
      <Route path="/reservations" element={<Reservations/>} />
  </Routes>
  )
}

export default AppRoutes;