import React from 'react'
import Navbar from './components/Navbar/Navbar'
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/Home'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Footer from './components/Footer'
import SingleProduct from './components/SingleProduct'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/clothing" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
