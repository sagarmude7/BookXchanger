  
import { GET_PROFILE , EDIT_PROFILE, ERROR} from "../constants/actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (user={},action)=>{
    switch(action.type){
        case GET_PROFILE:
            return action.payload
        case EDIT_PROFILE:
            console.log("in reducers error",action.payload);
            return action.payload;
        case ERROR:
            console.log(action.payload,"in reduce");
            return action.payload;
        default:
            return user;
    }
}