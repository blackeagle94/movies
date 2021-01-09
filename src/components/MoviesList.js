import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MoviesList = (props) => {

    const emptyMessage = (<p>There are no movies yet.</p>)
    const movisesList = (<div>Movies List</div>)
	return (
        <div>
            Movies List Comp
            {props.movies.length === 0 ? emptyMessage : movisesList}
        </div>
    );
};

MoviesList.propsTypes = {
	movies: PropTypes.array.isRequired
};

export default MoviesList;
