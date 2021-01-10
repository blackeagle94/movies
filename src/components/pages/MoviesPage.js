import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropsTypes from 'prop-types'
import MoviesList from '../MoviesList'
import { fetchMovies } from "../../actions/moviesAction";

class MoviesPage extends Component {

    static propsTypes = {
        movies: PropsTypes.object.isRequired
    }

    componentDidMount() {
        this.props.fetchMovies()
    }
    

    render() {
        return (
            <div>
                <h2>Movies PAge</h2>
                <MoviesList movies = {this.props.movies}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.moviesReducer
    }
}

const mapDispatchToProps = {
    fetchMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
