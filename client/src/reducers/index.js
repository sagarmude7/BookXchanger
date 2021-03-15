import {combineReducers} from 'redux'
import books from './books'
import authData from './auth'
import filterData from './filter'
import wishList from './wishList'
import user from './user'

export default combineReducers({books,authData,filterData,wishList,user})