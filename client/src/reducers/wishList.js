import {FETCH_FAV} from '../constants/actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default (wishList=[],action)=>{
    switch(action.type){
        case FETCH_FAV:
            return action.payload
        default:
            return wishList
    }
}