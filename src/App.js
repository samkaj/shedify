import React, { Component } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import StartPage from "./pages/Start";
import GeneratePage from "./pages/Generate";
import Navbar from "./components/Navbar";
import SharePage from "./pages/Share"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {spotifyAuthURL: ''};
    this.setAuthURL = this.setAuthURL.bind(this);
    this.setAuthURL();
  }

  setAuthURL() {
    fetch('http://localhost:8888/login')
      .then(res => res.text())
      .then(res => this.setState({spotifyAuthURL: res}))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <Router>
        <Navbar pages={['Start', 'Generate', 'Share']} spotifyAuthURL={this.state.spotifyAuthURL} />
        <div className="Container">
          <Switch>
            <Route exact path="/">
              <StartPage spotifyAuthURL={this.state.spotifyAuthURL} />
            </Route>

            <Route path="/Generate">
              <GeneratePage />
            </Route>

            <Route path="/Share">
              <SharePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;