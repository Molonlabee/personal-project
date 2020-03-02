import {createStore, combineReducers, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'

//reducers
import authReducer from './reducers/authReducer'
import reducer from './reducers/reducer'

const combineReducer = combineReducers({
    authReducer, reducer
})

export default createStore(combineReducer, applyMiddleware(promise)) 