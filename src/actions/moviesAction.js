import axios from 'axios'
import { API_BASE } from "../config/env";



export const fetchMovies = () => {
    return dispatch => {
        axios.get(`${API_BASE}/movies`)
        .then(response => response.data)
        .then(data => console.log(data))
        .catch(error => console.log(error.message))
    }
}