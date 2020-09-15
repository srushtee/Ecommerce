//base reducer object that represents all the state of the object

import { combineReducers} from 'redux'

import userReducer from './user/user-reducer'

export default combineReducers({
    user: userReducer
})