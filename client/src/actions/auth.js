import {AUTH} from '../constants/actions'
import api from '../api/index'


export const signUp = (formData,history)=>async(dispatch)=>{
    try{
        const {data} = await api.signUp(formData)
        dispatch({type:AUTH,payload:data})
        history.push('/')
    }catch(err){
        const data = err.response.data
        dispatch({type:AUTH,payload:data})
    }
}

export const signIn = (formData,history)=>async(dispatch)=>{
    try {
        const {email,password} = formData
        const {data} = await api.signIn({email,password})
        dispatch({type:AUTH,payload:data})
        history.push('/')
    } catch (err) {
        const data = err.response.data
        dispatch({type:AUTH,payload:data})
    }
}

export const googleFacebookSignIn = (formData,history)=>async(dispatch)=>{
    try{
        const {data} = await api.googleFacebookSignIn(formData)
        dispatch({type:AUTH,payload:data})
        history.push('/')
    }catch(err){
        const data = err.response.data
        dispatch({type:AUTH,payload:data})
    }
}