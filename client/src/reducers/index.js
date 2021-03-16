import {combineReducers} from 'redux'
import books from './books'
import authData from './auth'
import user from './user'

export default combineReducers({books,authData,user})