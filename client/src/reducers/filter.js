import {ADDFILTER} from '../constants/actions'
const filterReducer = (filterData=[],action)=>{
    switch(action.type){
        case ADDFILTER:
            return action.payload;
        default:
            return [];
    }
}

export default filterReducer;