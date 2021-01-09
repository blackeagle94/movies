import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropsTypes from 'prop-types'

class MoviesPage extends Component {

    static propsTypes = {
        movies: PropsTypes.array.isRequired
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Movies PAge</h2>
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
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
