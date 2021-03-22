import {GET_BOOK} from '../constants/actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default (book={},action)=>{
    switch(action.type){
        case GET_BOOK:
            return action.payload;
        default:
            return book;
    }
}