import { ADDPRODUCTS, GETPRODUCT, SINGELPRODUCT,  } from "../ActonType";

let initialState={
    products:[],
    singelproduct:{},
    cart:[]
};


export const products = (state=initialState,{type,payload})=>{
    switch (type){
        case ADDPRODUCTS:
            return{
                ...state,
                products:[...state.products,payload],
            };
            case GETPRODUCT:
                return{
                    ...state,
                    products:payload,
                }

                case SINGELPRODUCT:
                    return{
                        ...state,
                        singelproduct:payload
                    }
                // case SINGLE_IMG:
                //     return{
                //         ...state,
                //         products:payload,
                //     }
                default:
                    return state;
    }
}