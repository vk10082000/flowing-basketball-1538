import React from 'react'
import { Route, Routes } from 'react-router-dom'



import Login from "../Pages/Login"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Register from '../Pages/Register'
import  Show  from '../Pages/Show'
import Crypto from '../Pages/Crypto'




const AllRoutes = () => {
  return (
    <div>
      <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/crypto" element={<Crypto />} />

                <Route path='/:id' element={<Show />} />
           
            </Routes>
    </div>
  )
}

export default AllRoutes