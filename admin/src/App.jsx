import React from 'react'
import AdminDashboard from './pages/AdminDashboard'
import Products from './pages/Products'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminDashboard />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App