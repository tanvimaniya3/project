import { LOGIN, LOGOUT, SIGNUP } from "../ActonType";


let initialstate = {

    userdata:{},
    isLogin:false,
};

export const User = (state = initialstate,{type,payload})=>{
// console.log(payload);
    switch(type){
        case SIGNUP:
            return{
                ...state,
                userdata:payload,
                isLogin:true
            }
            case LOGIN:
                return{
                    ...state,
                    userdata:payload,
                    isLogin:true
                }

                case LOGOUT:
                    return{...state,userdata:{},isLogin:false,};
                    
                    default:
                        return state;
    }
}