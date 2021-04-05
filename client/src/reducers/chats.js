import {ADD_CHAT} from '../constants/actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default (chats=[],action)=>{
    switch(action.type){
        case ADD_CHAT:
            return [...chats,action.payload];
        default:
            return chats;
    }
}