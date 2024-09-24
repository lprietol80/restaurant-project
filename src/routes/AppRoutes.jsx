import React from "react";
import {Route, Routes} from 'react-router-dom';
import About from "../components/About";
import Homepage from "../components/Homepage";
import Login from "../components/Login";
import Menu from "../components/Menu";
import Nopage from "../components/Nopage";
import OrderOnline from "../components/OrderOnline";
import Reservations from "../components/Reservations"


function AppRoutes (){
  return(
    <Routes>
      <Route path="/" element={<Homepage/>} /> 
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/orderonline" element={<OrderOnline/>} />
      <Route path="/reservations" element={<Reservations/>} />
      <Route path="*" element={<Nopage/>}/>
  </Routes>
  )
}

export default AppRoutes;