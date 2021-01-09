import React, { Component } from 'react'
import PropTypes from "prop-types";

const MoviesList = (props) => {
    
        return (
            <div>
                Movies List Comp
            </div>
        )
    
}

MoviesList.propsTypes = {
    movies: PropTypes.array.isRequired
}

export default MoviesList
