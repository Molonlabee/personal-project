import axios from 'axios'

const initialState = {
    username: '',
    password: '',
    email: '',
    user: [],
    loggedIn: false
}

//constants
const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';

export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

export const resetFields = () => {
    return {
        type: RESET_FIELDS
    }
}

export const registerUser = (username, password, email) => {
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', {
            username: username,
            password: password,
            email: email
        })
    }
}

export const loginUser = (username, password) => {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', {
            username: username,
            password: password
        })
    }
}

export const logout = () => {
    return {
        type: LOGOUT_USER,
        payload: axios.get('/auth/logout')
    }
}

export const getUser = () => {
    return {
        type: GET_USER,
        payload: axios.get('/auth/user')
    }
}

export default function authReducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_STATE:
            return {
                ...state,
                ...payload
            }
        case RESET_FIELDS:
            return {
                username: '',
                password: '',
                email: '',
                user: [],
                loggedIn: false
            }
        case `${REGISTER_USER}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                loggedIn: true,
                loading: false,
            }
        case `${LOGIN_USER}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: payload.data
            }
        case `${LOGOUT_USER}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${LOGOUT_USER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                user: []
            }
        case `${GET_USER}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${GET_USER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                user: payload.data
            }
        default:
            return state;
    }
}