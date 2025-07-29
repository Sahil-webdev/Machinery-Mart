import React from 'react'
import AdminDashboard from './pages/AdminDashboard'
import Products from './pages/Products'
import { Route, Routes } from 'react-router-dom'
import ServicesManagement from './pages/Services'
import OrderManagement from './pages/Orders'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminDashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<ServicesManagement />} />
        <Route path='/orders' element={<OrderManagement />} />
      </Routes>
    </div>
  )
}

export default App