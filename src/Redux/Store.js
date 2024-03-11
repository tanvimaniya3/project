import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { User } from "./reducers/User";
// import Products from "../pages/Products";
import { thunk } from "redux-thunk";
import { products } from "./reducers/Product";


let combine=combineReducers({
    user:User,
    data:products
})

 export const store=legacy_createStore(
   combine,
   applyMiddleware(thunk)
 )