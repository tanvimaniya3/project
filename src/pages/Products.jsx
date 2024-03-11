import { Getproducts } from '../Redux/Action';
 import React, { useEffect } from 'react'
 import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


function Products() {


   let product = useSelector((store)=>store.data);  
   let dispatch= useDispatch();
   useEffect(()=>{
    //  if(Products.length == 0){
        
    //     }
           dispatch(Getproducts());
   },[]);

   console.log(product);
   return (
     <div>
       {product.products.map((ele)=>{
         return(
           <>
            <Link to={`/product/${ele.id}`}>
            <img src={ele.img}></img>
             <h1>{ele.title}</h1>
            </Link>
           </>      )
       })}
     </div>
   )
 }

 export default Products
