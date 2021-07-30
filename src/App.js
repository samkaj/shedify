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
    this.state = {apiResponse : "" };
  }

  render() {
    return (
      <Router>
        <Navbar pages={['Start', 'Generate', 'Share']} />
        <div className="Container">
          <Switch>
            <Route exact path="/">
              <StartPage />
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