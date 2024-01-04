import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Action';

function Login() {

   
    
  let [email,setEmail]=useState("");
  let[password,setPassword]=useState("");
  let dispatch = useDispatch();

  const handalLogin=async(email,password)=>{
    console.log(email,password);
    let user = await axios.get(`http://localhost:8090/user?email=${email}&password=${password}`);
    console.log(...user.data)
    
    if(user.data[0]){
      dispatch(login(...user.data))
    }
  }

 const handalSubmit =(e)=>{
  e.preventDefault();
  handalLogin(email,password);
  setEmail("")
  setPassword("")
 }

  return (
    <>
     <form onSubmit={handalSubmit}>
   
      <input type='Email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input type='Password' placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
      <button>Submit</button>
     </form>
    </>
  )
}
 
export default Login
