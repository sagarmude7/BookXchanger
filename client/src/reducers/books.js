import {FETCH_ALL,CREATE} from '../constants/actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default (books=[],action)=>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...books,action.payload]
        default:
            return books
    }
}