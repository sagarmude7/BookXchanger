
export default (user=[],action)=>{
    switch(action.type){
        case 'GET_PROFILE':
            //console.log("in reducer", action.payload)
            return action.payload;
            //return users.map((user) => (user._id === action.payload._id ? action.payload : user));
        case 'EDIT_PROFILE':
            return [...user,action.paylaod];
        default:
            return user;

    }
}