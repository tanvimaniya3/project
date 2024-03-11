import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/nav.css'
import { useSelector } from 'react-redux'
import logo from '../img/logo-white.png'


function Navbar() {

  let data=useSelector((store)=>store)
  console.log(data.user);

  return (
   <div className='header'>
           <div id='nav'>
           <NavLink><img src={logo} id='logo' alt=''/></NavLink>
           <NavLink to='/'id='navbar' className='fw-semibold'>Home</NavLink>
            <NavLink to='/Products' id='navbar' className='fw-semibold'>Products</NavLink>
            <NavLink to='/Cart' id='navbar' className='fw-semibold'>Cart</NavLink>
            <NavLink to='/Shop' id='navbar' className='fw-semibold'>Shop</NavLink>
            <NavLink to='/addproducts' id='navbar' className='fw-semibold'>addproduct</NavLink>
           {data.user.isLogin?(<span id='navbar'>{data.user.userdata.username}</span>) : ( <NavLink to='/Singup'  className='fw-semibold'id='navbar'>Singup</NavLink>)}
           {data.user.isLogin?(<span className='fw-semibold'>Logout</span>) : ( <NavLink to='/Login' className='fw-semibold' id='navbar' >Login </NavLink>) }<i class="bi bi-person ms-5 ps-5 fs-5 text-white"></i>
           <i class="bi bi-search text-white fs-5"></i><i class="bi bi-heart text-white fs-5"></i><i class="bi bi-bag text-white  fs-5"></i>
           
           </div>
           
   </div>
      
  
  )
}

export default Navbar