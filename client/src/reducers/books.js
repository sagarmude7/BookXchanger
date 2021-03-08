import {FETCH_ALL,CREATE,FILTER_BOOKS} from '../constants/actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default (books=[],action)=>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case FILTER_BOOKS :
            return (action.payload)
        case CREATE:
            return [...books,action.payload]
        case 'UPDATE_BOOKS':
            return action.payload
        default:
            return books
    }
}