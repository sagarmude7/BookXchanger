import {ADDFILTER} from '../constants/actions'
const filterReducer = (filterData=[],action)=>{
    switch(action.type){
        case ADDFILTER:
            console.log(action.payload)
            return action.payload;
        default:
            return [];
    }
}

export default filterReducer;