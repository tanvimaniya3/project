import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getproducts } from '../Redux/Action';

function Products() {


  let {Products} = useSelector((store)=>store.Product);  
  let dispatch= useDispatch();
  useEffect(()=>{
    if(Products.length == 0){
      dispatch(Getproducts());
      console.log("called");
    }
  },[]);
  return (
    <div>
      {Products.map((ele)=>{
        return(
          <>
            <img src={ele.img}></img>
          </>
        )
      })}
    </div>
  )
}

export default Products
