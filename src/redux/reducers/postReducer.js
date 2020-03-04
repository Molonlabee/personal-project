import axios from 'axios'
require('dotenv').config()

//INITIAL STATE
const initialState = {
    post: [],
    games: [],
    books: [],
    music: [],
    photos: [],
    tv:[]
}
//CONSTANTS 
const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';
const CLEAR_FIELDS = 'CLEAR_FIELDS';
const GET_POST = 'GET_POST';
//GAMES
const GET_GAMES = 'GET_GAMES';
const ADD_GAME = 'ADD_GAME';
//BOOKS
const GET_BOOKS = 'GET_BOOKS';
const ADD_BOOK = 'ADD_BOOK';
const UPDATE_BOOKS = 'UPDATE_BOOK';
//MUSIC
const GET_MUSIC = 'GET_MUSIC';
const ADD_MUSIC = 'ADD_MUSIC';
//PHOTOS
const GET_PHOTOS = 'GET_PHOTOS';
const ADD_PHOTO = 'ADD_PHOTO';
//TV
const GET_TV = 'GET_TV';
const ADD_TV = 'ADD_TV';

// ACTION CREATORS
export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}
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
export const addGame = (game) => {
    return {
        type: ADD_GAME,
        payload: axios.post('/api/game', {
            game
        })
    }
}
//BOOKS
export const getBooks = () => {
    return {
        type: GET_BOOKS,
        payload: axios.get('/api/books')
    }
}
export const addBook = (book) => {
    return {
        type: ADD_BOOK,
        payload: axios.post('/api/book', {
            book
        })
    }
}
export const updateBooks = (newBook) => {
    return {
        type:UPDATE_BOOKS,
        payload: newBook
    }
}
//MUSIC
export const getMusic = () => {
    return {
        type: GET_MUSIC,
        //NOT ACTUAL API, JUST A PLACEHOLDER
        payload: axios.get('http://spotify.co/api/music')
    }
}
export const addMusic = (music) => {
    return {
        type: ADD_MUSIC,
        payload: axios.post('/api/music', {
            music
        })
    }
}
//PHOTOS
export const getPhotos = () => {
    return {
        type: GET_PHOTOS,
        payload: axios.get('/api/photos')
    }
}
export const addPhoto = (photo) => {
    return {
        type: ADD_PHOTO,
        payload: axios.post('/api/photo', {
            photo
        })
    }
}
//TV
export const getTv = () => {
    return {
        type: GET_TV,
        payload: axios.get('/api/tv')
    }
}
export const addTv = (tv) => {
    return {
        type: ADD_TV,
        payload: axios.post('/api/tv', {
            tv
        })
    }
}

//REDUCER
export default function postReducer(state=initialState, action) {
    const {type, payload} = action;
    console.log(action)
    switch(type) {
        case UPDATE_STATE:
            return {
                ...state,
                ...payload
            }
            case RESET_FIELDS:
                return {
                    post: [],
                    games: [],
                    books: [],
                    music: [],
                    photos: [],
                    tv:[]
                }
        //GAMES
        case GET_GAMES + '_FULFILLED':
            return {
                ...state,
                games: payload.data
            }
        case ADD_GAME + '_FULFILLED':
            return {
                ...state,
                games: payload.data
            }
        case CLEAR_FIELDS:
            return {
                ...state,
                games: ''
            }
        //BOOKS
        case GET_BOOKS + '_FULFILLED':
            // console.log(payload.data)
            return {
                ...state,
                books: payload.data
            }
            case ADD_BOOK + '_FULFILLED':
                return {
                    ...state,
                    books: payload.data
                }
            case CLEAR_FIELDS:
                return {
                    ...state,
                    books: ''
                }
            case UPDATE_BOOKS +'_FULFILLED':
                return {
                    ...state,
                    username: action.payload
                }
        //PHOTOS
        case GET_PHOTOS + '_FULFILLED':
            return {
                ...state, 
                photos: payload.data
            }
            case ADD_PHOTO + '_FULFILLED':
                return {
                    ...state,
                    photos: payload.data
                }
            case CLEAR_FIELDS:
                return {
                    ...state,
                    photos: ''
                }
        //TV
        case GET_TV + '_FULFILLED':
            return {
                ...state,
                tv: payload.data
            }
            case ADD_TV + '_FULFILLED':
                return {
                    ...state,
                    tv: payload.data
                }
            case CLEAR_FIELDS:
                return {
                    ...state,
                    tv: ''
                }

        default:
            return state;
        
    }
}