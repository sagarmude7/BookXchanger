import {FETCH_FAV, GET_PROFILE, EDIT_PROFILE, ERROR, CHANGE_PASSWORD, FEEDBACK, VALID, GET_RECENTS} from '../constants/actions'
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

export const getRecentUsers = () =>async(dispatch)=>{
    try{
        const {data} = await api.getRecentUsers();
        dispatch({type:GET_RECENTS,payload:data})

    }catch(err){
        console.log(err);
    }
}
export const editProfile = (userData) => async (dispatch) => {

    try {
        
        const {data} = await api.editProfile(userData);
        dispatch({type:EDIT_PROFILE,payload:data});
        dispatch({type:VALID,payload:{msg:"Profile Updated Successfully"}})
    } catch (error) {
        
        const data = error.response.data;
        dispatch({type:ERROR,payload:data});
        dispatch({type:VALID,payload:data})
    }
    
};

export const changePassword = (passData) => async (dispatch) => {

    try {
        console.log("in actions",passData);
        const {data} = await api.changePassword(passData);
        console.log(data,"after actions");
        dispatch({type:CHANGE_PASSWORD,payload:data});
        dispatch({type:VALID,payload:{msg:"Password Updated Successfully"}})
    } catch (error) {
        console.log(error);
        const data = error.response.data;
        dispatch({type:ERROR,payload:data});
        dispatch({type:VALID,payload:data})
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



export const postFeedBackForm = (feedData) => async (dispatch)=>{
    try{
        console.log(feedData)
        const {data} = await api.sendMail(feedData);
        dispatch({type:FEEDBACK,payload:data});
    }catch(err){
        const data = err.response.data
        console.log(data)
        dispatch({type:FEEDBACK,payload:data});
    }
}
