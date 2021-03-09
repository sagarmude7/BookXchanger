import {combineReducers} from 'redux'
import books from './books'
import authData from './auth'
import filterData from './filter'

export default combineReducers({books,authData,filterData})