import "./App.css";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage";

import {
  Container,
  Image,
  Menu,
  Visibility,
} from "semantic-ui-react";
import { menuStyle, fixedMenuStyle } from './components/helpers/styleHelper';
import Footer from "./components/Footer";
import Header from "./components/Header";


class App extends Component {
  state = {
    menuFixed: null,
    overlayFixed: null,
  };

  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: null });

  unStickOverlay = () => this.setState({ overlayFixed: null });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state;
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
