  
import { GET_PROFILE , EDIT_PROFILE} from "../constants/actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (user={},action)=>{
    switch(action.type){
        case GET_PROFILE:
            return action.payload;
        case EDIT_PROFILE:
            return [...user, action.paylaod];
        default:
            return user;
    }
}