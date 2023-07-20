import React from 'react'
import { Route, Routes } from 'react-router-dom'


const AllRotes = () => {
  return (
    <div>
      <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
               
            </Routes>
    </div>
  )
}

export default AllRotes