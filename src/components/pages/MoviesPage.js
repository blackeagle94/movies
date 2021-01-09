import React, { Component } from 'react'
import { connect } from 'react-redux'

class MoviesPage extends Component {
    render() {
        return (
            <div>
                <h2>Movies PAge</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
