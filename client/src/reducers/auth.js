import {AUTH, LOGOUT} from '../constants/actions'
const authReducer = (authData={},action)=>{
    switch(action.type){
        case AUTH:
            console.log(action.payload)
            if(!action.payload.msg)
                localStorage.setItem('profile',JSON.stringify(action?.payload))
            return action.payload
        case LOGOUT:
            localStorage.clear()
            return {}
        default:
            return {}
    }
}

export default authReducer;