import api from '../api/index';

export const getProfile = () => async (dispatch) => {

    try {
        const {data} = await api.getProfile();
        //console.log(data);
        //console.log("before dispatch");
        dispatch({ type: 'GET_PROFILE', payload: data });
        //console.log("after dispatch");
    } catch (error) {
        console.log(error);
    }
    
};


export const editProfile = (id,user) => async (dispatch) => {

    try {
        const {data} = await api.editProfile(id,user);
        dispatch({ type: 'EDIT_PROFILE', payload: data });
    } catch (error) {
        console.log(error);
    }
    
};