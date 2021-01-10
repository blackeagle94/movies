import React from 'react';
import PropTypes from 'prop-types';

const MoviesList = (props) => {

    const emptyMessage = (<p>There are no movies yet.</p>)
    const movisesList = (<div>{props.movies.error.response ? <h3>Error data!</h3> : <p>Hata Yok</p>}</div>)
    console.log(props.movies.error)
	return (
        <div>
            Movies List Comp
            {props.movies.length === 0 ? emptyMessage : movisesList}
        </div>
    );
};

MoviesList.propsTypes = {
	movies: PropTypes.shape({
        movies: PropTypes.array.isRequired
    }).isRequired
};

export default MoviesList;
