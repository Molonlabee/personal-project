import axios from "axios";
require("dotenv").config();

//INITIAL STATE
const initialState = {
  post: [],
  games: [],
  books: [],
  music: [],
  photos: [],
  tv: []
};
//CONSTANTS
const UPDATE_STATE = "UPDATE_STATE";
const RESET_FIELDS = "RESET_FIELDS";
const CLEAR_FIELDS = "CLEAR_FIELDS";
const GET_POST = "GET_POST";
//GAMES
const GET_GAMES = "GET_GAMES";
const ADD_GAME = "ADD_GAME";
const DELETE_GAME = "DELETE_GAME";
const UPDATE_GAME = "UPDATE_GAME";
//BOOKS
const GET_BOOKS = "GET_BOOKS";
const ADD_BOOK = "ADD_BOOK";
const DELETE_BOOK = "DELETE_BOOK";
const UPDATE_BOOKS = "UPDATE_BOOKS";
//MUSIC
const GET_MUSIC = "GET_MUSIC";
const ADD_MUSIC = "ADD_MUSIC";
const DELETE_MUSIC = "DELETE_MUSIC";
const UPDATE_MUSIC = "UPDATE_MUSIC";
//PHOTOS
const GET_PHOTOS = "GET_PHOTOS";
const ADD_PHOTO = "ADD_PHOTO";
const DELETE_PHOTO = "DELETE_PHOTO";
const UPDATE_PHOTO = "DELETE_PHOTO";
//TV
const GET_TV = "GET_TV";
const ADD_TV = "ADD_TV";
const DELETE_TV = "DELETE_TV";
const UPDATE_TV = "UPDATE_TV";

// ACTION CREATORS
export const updateState = e => {
  return {
    type: UPDATE_STATE,
    payload: e
  };
};
export const getPost = () => {
  return {
    type: GET_POST,
    payload: axios.get("/api/post")
  };
};
export const getGames = () => {
  return {
    type: GET_GAMES,
    payload: axios.get("/api/games")
  };
};
export const addGame = game => {
  return {
    type: ADD_GAME,
    payload: axios.post("/api/game", {
      game
    })
  };
};
export const deleteGame = id => {
  return {
    type: DELETE_GAME,
    payload: axios.delete("/api/game/:id")
  };
};
export const updateGame = newGame => {
  return {
    type: UPDATE_GAME,
    payload: newGame
  };
};
//BOOKS
export const getBooks = () => {
  return {
    type: GET_BOOKS,
    payload: axios.get("/api/books")
  };
};
export const addBook = book => {
  return {
    type: ADD_BOOK,
    payload: axios.post("/api/book", {
      book
    })
  };
};
export const deleteBook = id => {
  return {
    type: DELETE_BOOK,
    payload: axios.delete("/api/book/:id")
  };
};
export const updateBooks = newBook => {
  return {
    type: UPDATE_BOOKS,
    payload: newBook
  };
};
//MUSIC
export const getMusic = () => {
  return {
    type: GET_MUSIC,
    //NOT ACTUAL API, JUST A PLACEHOLDER
    payload: axios.get("http://spotify.co/api/music")
  };
};
export const addMusic = music => {
  return {
    type: ADD_MUSIC,
    payload: axios.post("/api/music", {
      music
    })
  };
};
export const deleteMusic = id => {
  return {
    type: DELETE_MUSIC,
    payload: axios.delete("/api/music/:id")
  };
};
export const updateMusic = newMusic => {
  return {
    type: UPDATE_MUSIC,
    payload: newMusic
  };
};
//PHOTOS
export const getPhotos = () => {
  return {
    type: GET_PHOTOS,
    payload: axios.get("/api/photos")
  };
};
export const addPhoto = photo => {
  return {
    type: ADD_PHOTO,
    payload: axios.post("/api/photo", {
      photo
    })
  };
};
export const deletePhoto = id => {
  return {
    type: DELETE_PHOTO,
    payload: axios.delete("/api/photo/:id")
  };
};
export const updatePhoto = newPhoto => {
  return {
    type: UPDATE_PHOTO,
    payload: newPhoto
  };
};
//TV
export const getTv = () => {
  return {
    type: GET_TV,
    payload: axios.get("/api/tv")
  };
};
export const addTv = tv => {
  return {
    type: ADD_TV,
    payload: axios.post("/api/tv", {
      tv
    })
  };
};
export const deleteTV = id => {
  return {
    type: DELETE_TV,
    payload: axios.delete("/api/tv/:id")
  };
};
export const updateTv = newTv => {
  return {
    type: UPDATE_TV,
    payload: newTv
  };
};
//REDUCER
export default function postReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case UPDATE_STATE:
      return {
        ...state,
        ...payload
      };
    case RESET_FIELDS:
      return {
        post: [],
        games: [],
        books: [],
        music: [],
        photos: [],
        tv: []
      };
      case CLEAR_FIELDS:
        return {
          ...state,
            post: [],
            games: [],
            books: [],
            music: [],
            photos: [],
            tv: []
        };
    //GAMES
    case GET_GAMES + "_FULFILLED":
      return {
        ...state,
        games: payload.data
      };
    case ADD_GAME + "_FULFILLED":
      return {
        ...state,
        games: payload.data
      };
    case DELETE_GAME + "_FULFILLED":
        return {
          ...state,
          game: action.payload.data
        };
    case UPDATE_GAME + "_FULFILLED":
        return {
            ...state,
            games: action.payload
        };
    //BOOKS
    case GET_BOOKS + "_FULFILLED":
      return {
        ...state,
        books: payload.data
      };
    case ADD_BOOK + "_FULFILLED":
      return {
        ...state,
        books: payload.data
      };
    case DELETE_BOOK + "_FULFILLED":
        return {
          ...state,
          book: action.payload.data
        };
    case UPDATE_BOOKS + "_FULFILLED":
      return {
        ...state,
        books: action.payload
      };
    //PHOTOS
    case GET_PHOTOS + "_FULFILLED":
      return {
        ...state,
        photos: payload.data
      };
    case ADD_PHOTO + "_FULFILLED":
      return {
        ...state,
        photos: payload.data
      };
    case DELETE_PHOTO + "_FULFILLED":
        return {
          ...state,
          book: action.payload.data
        };
    case UPDATE_PHOTO + "_FULFILLED":
      return {
        ...state,
        photos: action.payload
      };
    //TV
    case GET_TV + "_FULFILLED":
      return {
        ...state,
        tv: payload.data
      };
    case ADD_TV + "_FULFILLED":
      return {
        ...state,
        tv: payload.data
      };
    case DELETE_TV + "_FULFILLED":
      return {
        ...state,
        tv: action.payload.data
      };
    case UPDATE_TV + "_FULFILLED":
      return {
        ...state,
        tv: action.payload
      };
    default:
      return state;
  }
}
