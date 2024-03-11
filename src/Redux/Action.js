import axios from "axios";

import { ADDPRODUCTS, ADD_CART, GETPRODUCT, LOGIN, LOGOUT, SIGNUP, SINGELPRODUCT, } from "./ActonType"


export const singup= (data)=>{

  console.log(data);
      return{
        type:SIGNUP,
        payload:data
      }
}
export const login= (data)=>{
    return{
      type:LOGIN,
      payload:data
    }
}
export const logout= ()=>{
    return{
      type:LOGOUT,
      
    }
}

export const addProducts = (data)=>async (dispatch) =>{
  let res = await axios.post ("http://localhost:8090/product", data);
  dispatch({
    type:ADDPRODUCTS,
    payload:res.data,
  });

};

export const Getproducts =()=>async(dispatch)=>{


  let res= await axios.get ("http://localhost:8090/product");
  dispatch({

    type:GETPRODUCT,
    payload:res.data,
  });
};

// export const section_img =()=>async(dispatch)=>{


//   let res= await axios.get ("http://localhost:8090/single_img");
//   dispatch({

//     type:SINGLE_IMG,
//     payload:res.data,
//   });
// };
export const singelProduct = (id) => async (dispatch) => {
  let res = await axios.get(`http://localhost:8090/product/${id}`);
  dispatch({
    type: SINGELPRODUCT,
    payload: res.data,
  });
};

export const addCart = (data) => async (dispatch) => {
  let res = await axios.post(" http://localhost:8090/cart", data);

  dispatch({
    type: ADD_CART,
    payload: res.data,
  });
};



// export const GetCart = () => async (dispatch) => {
//   let res = await axios.get("http://localhost:8090/cart");
//   dispatch({
//     type: GET_CART,
//     payload: res.data,
//   });
// };




// export const deleteCart = (id) => async (dispatch) => {
//   let res = await axios.delete(`http://localhost:8090/cart/${id}`);
//   dispatch({
//     type: REMOVE_PRODUCT,
//     payload: id,
//   });
// };