import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { User } from "./reducers/User";
import Products from "../pages/Products";
import { thunk } from "redux-thunk";


let combine=combineReducers({
    user:User,
    product:Products
})

 export const store=legacy_createStore(
   combine,
   applyMiddleware(thunk)
 )