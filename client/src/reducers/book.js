import {GET_BOOK,VALID} from '../constants/actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default (book={},action)=>{
    switch(action.type){
        case GET_BOOK:
            return action.payload;
        case VALID:
            return action.payload;
        default:
            return book;
    }
}