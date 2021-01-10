import { FETCH_MOVIES } from "../actions/moviesAction";
import {FETCH_MOVIES_ERROR} from "../actions/moviesAction"

const initialState = {
    fetching: false,
    fetched: false,
    movies: [],
    error: {}
}

 const moviesReducer = (state = initialState, action) => {
    switch (action.type) {

    case FETCH_MOVIES:
        return { ...state, movies: action.payload }

    case FETCH_MOVIES_ERROR:
        return {...state, error: action.error}

    default:
        return state
    }
}
export default moviesReducer