  
import { GET_PROFILE , EDIT_PROFILE, UPDATE_SOLD} from "../constants/actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (user={},action)=>{
    switch(action.type){
        case GET_PROFILE:
        case EDIT_PROFILE:
            return action.payload
        default:
            return user;
    }
}