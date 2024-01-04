import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/nav.css'
import { useSelector } from 'react-redux'


function Navbar() {

  let data=useSelector((store)=>store)
  console.log(data.user);

  return (
   <div>
           <div id='nav'>
           <NavLink to='/'id='navbar'>Home</NavLink>
            <NavLink to='/Products' id='navbar'>Products</NavLink>
            <NavLink to='/Cart' id='navbar'>Cart</NavLink>
            <NavLink to='/addproducts' id='navbar'>addproduct</NavLink>
           {data.user.isLogin?(<span id='navbar'>{data.user.userdata.username}</span>) : ( <NavLink to='/Singup' id='navbar'>Singup</NavLink>)}
           {data.user.isLogin?(<span>Logout</span>) : ( <NavLink to='/Login' id='navbar'>Login</NavLink>)}
           
           </div>
   </div>
      
  
  )
}

export default Navbar