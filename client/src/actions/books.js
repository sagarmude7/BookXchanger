import {FETCH_ALL,CREATE,ADD_FAV,GET_BOOK} from '../constants/actions'
const api = require('../api/index')

export const getBooks = ()=>async(dispatch)=>{
    try {
        //get data from api
        const {data } = await api.fetchBooks()
        //console.log(data)
        dispatch({type:FETCH_ALL,payload:data})
    } catch (err) {
        // console.log("Some error occured")
        console.log(err)
    }
}

export const createBookAd = (formData)=>async(dispatch)=>{
    try{
        console.log("Hello")
        const {data} = await api.createBookAd(formData)
        console.log("Book created")
        console.log(data)
        dispatch({type:CREATE,payload:data})
    }catch(err){
        console.log(err)
    }
}


export const addToWishList = (id)=>async(dispatch)=>{
    try {
        const {data}= await api.addToWishList(id);
        console.log(data)
        dispatch({type:ADD_FAV,payload:data})
    } catch (error) {
        console.log(error);
    }
}

export const showBookInfo = (id)=>async(dispatch)=>{
    try {
        const {data}= await api.showBookInfo(id);
        console.log("Inside actions, data from API is" + data)
        dispatch({type:GET_BOOK,payload:data})
    } catch (error) {
        console.log(error);
    }
}





// export const getMyAds = ()=>async()=>{
//     try {
//         const {}
//     } catch (error) {
        
//     }
// }