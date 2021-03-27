import {FETCH_FAV, GET_PROFILE, EDIT_PROFILE, ERROR, CHANGE_PASSWORD, FEEDBACK} from '../constants/actions'
import api from '../api/index';

export const getProfile = (id) => async (dispatch) => {

    try {
        const {data} = await api.getProfile(id);
        //console.log(data);
        //console.log("before dispatch");
        dispatch({ type: GET_PROFILE, payload: data });
        //console.log("after dispatch");
    } catch (error) {
        console.log(error);
    }
    
};


export const editProfile = (userData) => async (dispatch) => {

    try {
        console.log("in actions");
        const {data} = await api.editProfile(userData);
        console.log(data);
        dispatch({type:EDIT_PROFILE,payload:data});
    } catch (error) {
        console.log(error);
        const data = error.response.data;
        dispatch({type:ERROR,payload:data});
    }
    
};

export const getWishList = (id) => async (dispatch)=>{
    try {
        const {data} = await api.getWishList(id);
        console.log(data)
        dispatch({type:FETCH_FAV,payload:data})
    } catch (err) {
        console.log(err)
    }
}

export const changePassword = (passData) => async (dispatch) => {

    try {
        console.log("in actions",passData);
        const {data} = await api.changePassword(passData);
        console.log(data,"after actions");
        dispatch({type:CHANGE_PASSWORD,payload:data});
    } catch (error) {
        console.log(error);
        const data = error.response.data;
        dispatch({type:ERROR,payload:data});
    }
    
};

export const postFeedBackForm = (feedData) => async (dispatch)=>{
    try{
        console.log(feedData)
        const {data} = await api.sendMail(feedData);
        console.log(data);
    }catch(error){
        console.log(error);
        const data = error.response.data;
        dispatch({type:FEEDBACK,payload:data});
    }
}