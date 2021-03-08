
export default (data=[],action)=>{
    switch(action.type){
        case 'GET_PROFILE':
            return action.paylaod;
        default:
            return data;

    }
}