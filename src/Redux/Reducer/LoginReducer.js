let initialState={
    email:'',
    password:'',
    authority:false,
}

function LoginReducer(state=initialState,action){
    let{type,payload} = action;

    switch(type){
        case "LOGIN_SUCCESS":
            return{...state,email:payload.email,password:payload.password,authority:true}
        default:
            return{...state}
    }
}

export default LoginReducer