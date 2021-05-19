import { AUTH, VALID } from "../constants/actions";
import api from "../api/index";


export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, payload: data });
    dispatch({ type: VALID, payload: { msg: "Logged In Successfully" } });
    history.push("/");
  } catch (err) {
    const data = err.response.data;
    dispatch({ type: VALID, payload: {msg:data.msg,type:"error"}});
  }
};

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { email, password } = formData;
    const { data } = await api.signIn({ email, password });
    dispatch({ type: AUTH, payload: data });
    dispatch({ type: VALID, payload: { msg: "Logged In Successfully" } });
    history.push("/");
  } catch (err) {
    const data = err.response.data;
    dispatch({ type: VALID, payload: {msg:data.msg,type:"error"}});
  }
};

export const googleFacebookSignIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.googleFacebookSignIn(formData);
    dispatch({ type: AUTH, payload: data });
    dispatch({ type: VALID, payload: { msg: "Logged In Successfully" } });
    history.push("/");
  } catch (err) {
    const data = err?.response?.data;
    dispatch({ type: VALID, payload: {msg:data.msg,type:"error"}});
  }
};

export const sendPasswordMail = (resetEmail) => async(dispatch) =>{
  try{
    console.log(resetEmail)
    const {data} = await api.sendPasswordMail({email:resetEmail});
    console.log(data)
    dispatch({type:VALID,payload:{msg:data.msg,type:"success"}})
  }catch(err){
    const data = err?.response?.data;
    dispatch({ type: VALID, payload: {msg:data.msg,type:"error"}});
  }
}

export const checkUserValid = (token,history)=>async(dispatch)=>{
  try{
    const {data} = await api.checkUserValid({token:token});
    dispatch({type:VALID,payload:{msg:data.msg,type:"success"}})
  }catch(err){
    const data = err?.response?.data;
    console.log(data)
    dispatch({ type: VALID, payload: {msg:data.msg,type:"error"}});
    history.push('/auth');
  }
}

export const resetPassword = (password,confirmPassword,token)=>async(dispatch)=>{
  try {
    const {data} = await api.resetPassword({password:password,confirmPassword:confirmPassword,token:token})
    dispatch({type:VALID,payload:{msg:data.msg,type:"success"}})
  } catch (err) {
    const data = err?.response?.data;
    console.log(data)
    dispatch({ type: VALID, payload: {msg:data.msg,type:"error"}});
  }
}
export const sendVerifyMail = (verifyEmail) => async(dispatch) =>{
  try{
    console.log(verifyEmail)
    const {data} = await api.verifyEmail({email:verifyEmail});
    console.log(data)
    dispatch({type:VALID,payload:{msg:data.msg,type:"success"}})
  }catch(err){
    // const data = err?.response?.data;
    // dispatch({ type: VALID, payload: {msg:data.msg,type:"error"}});
    console.log(err);
  }
}

export const verifiedUser = (token,history) => async(dispatch) =>{
  try{
    console.log(verifiedUser)
    const {data} = await api.verifiedUser({token : token});
    console.log(data)
    dispatch({ type: AUTH, payload: data });
    dispatch({type:VALID,payload:{msg:data.msg,type:"success"}})
    history.push("/");
  }catch(err){
    // const data = err?.response?.data;
    // dispatch({ type: VALID, payload: {msg:data.msg,type:"error"}});
    console.log(err);
  }
}
