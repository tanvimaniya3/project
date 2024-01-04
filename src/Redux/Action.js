import axios from "axios";
import { ADDPRODUCTS, GETPRODUCT, LOGIN, LOGOUT, SIGNUP } from "./ActonType"

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