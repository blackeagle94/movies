import axios from 'axios'
import { API_BASE } from "../config/env";

export const FETCH_MOVIES = 'FETCH_MOVIES'
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR'

export const fetchMovies = () => {
    return dispatch => {
        axios.get(`${API_BASE}/movies`)
        .then(response => response.data)
        .then(data => dispatch({
            type: FETCH_MOVIES,
            payload: data
        }))
        .catch(error => dispatch({
            type: FETCH_MOVIES_ERROR,
            payload: error
        }))
    }
}