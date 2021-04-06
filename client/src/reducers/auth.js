import {AUTH, LOGOUT} from '../constants/actions'
import {socket} from '../service/socket'
const authReducer = (authData={},action)=>{
    switch(action.type){
        case AUTH:
            console.log(action.payload)
            if(!action.payload.msg){
                localStorage.setItem('profile',JSON.stringify(action?.payload))
                const id = JSON.parse(localStorage.getItem('profile')).profile.id
                socket.connect()
                socket.emit('login',{id:id})
            }
            return action.payload
        case LOGOUT:
            const id = JSON.parse(localStorage.getItem('profile')).profile.id
            socket.emit('logout',{id:id})
            localStorage.clear()
            socket.close()
            return null
        default:
            return authData
    }
}

export default authReducer;