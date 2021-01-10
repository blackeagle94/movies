import { FETCH_MOVIES } from "../actions/moviesAction";

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

    default:
        return state
    }
}
export default moviesReducer