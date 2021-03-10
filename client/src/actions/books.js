import {FETCH_ALL,CREATE,FILTER_BOOKS} from '../constants/actions'
const api = require('../api/index')

export const getBooks = ()=>async(dispatch)=>{
    try {
        //get data from api
        const {data } = await api.fetchBooks()
        //console.log(data)
        dispatch({type:FETCH_ALL,payload:data})
    } catch (err) {
        console.log("Some error occured")
        // console.log(err.response.data)
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

// export const filterBooks = (filterData)=>async(dispatch)=>{
//     try {
//         //get data from api
//         const {data } = await api.fetchFilteredBooks(filterData)
//         console.log(data)
//         dispatch({type:FILTER_BOOKS,payload:data})
//     } catch (err) {
//         console.log("Some error occured")
//         // console.log(err.response.data)
//     }
// }
