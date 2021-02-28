import {combineReducers} from 'redux'
import books from './books'
import authData from './auth'

export default combineReducers({books,authData})