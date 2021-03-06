import api from '../api/index';

export const getProfile = (id) => async (dispatch) => {

    try {
        const {data} = await api.getProfile(id);
        dispatch({ type: 'GET_PROFILE', payload: data });
    } catch (error) {
        console.log(error);
    }
    
};