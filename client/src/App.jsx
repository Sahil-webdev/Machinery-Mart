import React from 'react'
import "./App.css"
import HomePage from './page/HomePage'
import { Routes, Route } from 'react-router-dom'
import Cart from './page/Cart'
import Footer from './component/Footer'
import WishlistPage from './page/WishlistPage'
import ProductPage from './page/ProductPage'
import ProductsPage from './page/AllProducts'
import ServicesPage from './page/AllServices'
import ModernHomePage from './page/NewHomePage'
import AuthPage from './page/LoginPage'
import EnquiryForm from './component/EnquiryForm'
import UserProfile from './page/Profile'
import MyOrders from './page/MyOrders'
import ServiceDetails from './page/ServicePage'
import ContactUs from './page/EnquiryPage'
import Checkout from './page/CheckoutPage'


const App = () => {
  return (
    <div className='bg-gradient-to-b from-lime-800 to-green-950'>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<ModernHomePage />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/wishlist' element={<WishlistPage />} /> */}
        <Route path='/product' element={<ProductPage />} />
        <Route path='/allproducts' element={<ProductsPage />} />
        <Route path='/allservices' element={<ServicesPage />} />
        <Route path='/login-signup' element={<AuthPage />}></Route>
        <Route path='/form' element={<EnquiryForm />}></Route>
        <Route path='/profile' element={<UserProfile />}></Route>
        <Route path='/my-orders' element={<MyOrders />}></Route>
        <Route path='/service' element={<ServiceDetails />}></Route>
        <Route path='/enquiry' element={<ContactUs />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
      <Footer />  
    </div>
  )
}

export default App
