import axios from 'axios'
require('dotenv').config()

//INITIAL STATE
const initialState = {
    post: [],
    games: [],
    books: [],
    music: [],
    photos: []
}
//CONSTANTS 
const UPDATE_STATE = 'UPDATE_STATE';
const GET_POST = 'GET_POST';
const GET_GAMES = 'GET_GAMES';
const GET_BOOKS = 'GET_BOOKS';
const GET_MUSIC = 'GET_MUSIC';
const GET_PHOTOS = 'GET_PHOTOS';
const GET_TV = 'GET_TV';
//ACTION CREATORS
// export const updateState = e => {
//     return {
//         type: UPDATE_STATE,
//         payload: e
//     }
// }
export const getPost = () => {
   return {
       type: GET_POST,
       payload: axios.get('/api/post')
   }
}
export const getGames = () => {
    return {
        type: GET_GAMES,
        payload: axios.get('/api/games')
    }
}
export const getBooks = () => {
    return {
        type: GET_BOOKS,
        payload: axios.get('/api/books')
    }
}

export const getMusic = () => {
    return {
        type: GET_MUSIC,
        //NOT ACTUAL API, JUST A PLACEHOLDER
        payload: axios.get('http://spotify.co/api/music')
    }
}

export const getPhotos = () => {
    return {
        type: GET_PHOTOS,
        payload: axios.get('/api/photos')
    }
}

export const getTv = () => {
    return {
        type: GET_TV,
        payload: axios.get('/api/tv')
    }
}

//REDUCER
export default function postReducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        
        case GET_GAMES + '_FULFILLED':
            return {
                ...state,
                games: payload.data
            }

        default:
            return state;
    }
}