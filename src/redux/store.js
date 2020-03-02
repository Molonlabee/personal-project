import {createStore, combineReducers, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'

//reducers
import authReducer from './reducers/authReducer'
import postReducer from './reducers/postReducer'
// import reducer from './reducers/reducer'

const combineReducer = combineReducers({
    authReducer,
    postReducer
//    reducer
})
//PROMISE
export default createStore(combineReducer, applyMiddleware(promise)) 