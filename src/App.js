import "./App.css";
import React, { Component } from "react";
import {  Route } from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage";

import {
  Container,
} from "semantic-ui-react";
import Footer from "./components/Footer";
import Header from "./components/Header";


class App extends Component {

  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: null });

  unStickOverlay = () => this.setState({ overlayFixed: null });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    
    return (
      <div>
		<Header />

        <Container text>
          Component App
          <br />
          <Route path="/movies" component={MoviesPage}></Route>
        </Container>
		<Footer />
      </div>
    );
  }
}

export default App;
