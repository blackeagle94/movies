import axios from 'axios'
import { API_BASE } from "../config/env";



export const fetchMovies = () => {
    return dispatch => {
        axios.get(`${API_BASE}/movies`)
        .then(response => )
        .catch(error => console.log(error))
    }
}