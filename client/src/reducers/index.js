import {combineReducers} from 'redux'
import books from './books'
import authData from './auth'
import user from './user'
import filterData from './filter'
import wishList from './wishList'


export default combineReducers({books,authData,filterData,wishList,user})
