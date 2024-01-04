import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { singup } from '../Redux/Action';

function Singup() {

  let[username,setUsername]=useState("");
  let [email,setEmail]=useState("");
  let[password,setPassword]=useState("");
  let dispatch = useDispatch();

  const handalSignup=async(userdata)=>{
    let user = await axios.post("http://localhost:8090/user",userdata);
    console.log(userdata)
    dispatch(singup(userdata))
  }

 const handalSubmit =(e)=>{
  e.preventDefault();
  let user ={
    username:username,
    email:email,
    password:password,
  };
  handalSignup(user);
 }

  return (
    <>
     <form onSubmit={handalSubmit}>
     <input type='text' placeholder='Enter Your Name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input type='Email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input type='Password' placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
      <button>Submit</button>
     </form>
    </>
  )
}

export default Singup
