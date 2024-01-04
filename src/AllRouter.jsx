import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Singup from './pages/Singup'
import Singelpage from './pages/Singelpage'
import AddProducts from './pages/AddProducts'

function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/addproducts' element={<AddProducts/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Singup' element={<Singup/>}></Route>
        <Route path='/Singelpage' element={<Singelpage/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRouter
