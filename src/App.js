import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage'

class App extends Component {
	render() {
		return (
			<div className="App">
				Component App
				<br />
				<Link to="movies">Movies</Link>
        <Route path='/movies' component={MoviesPage}/>
			</div>
		);
	}
}

export default App;
