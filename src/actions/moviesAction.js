import axios from 'axios'



export const fetchMovies = () => {
    return dispatch => {
        axios.get('https://5ffafeb087478d0017d9acc5.mockapi.io/movies')
        .then(response => )
        .catch(error => console.log(error))
    }
}