import {FETCH_ALL,CREATE,FILTER_BOOKS,ADD_FAV, FETCH_FAV} from '../constants/actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default (books=[],action)=>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case FILTER_BOOKS :
            return (action.payload)
        case CREATE:
            return [...books,action.payload]
        case ADD_FAV:
            return books.map(book=>action.payload._id===book._id?action.payload:book);
        case 'UPDATE_BOOKS':
            return action.payload;
        default:
            return books
    }
}