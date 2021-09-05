import React, { Component } from 'react';
import "../stylesheet/Start.css";

class StartPage extends Component {
  render() {
    return (
      <div className="Welcome-container">
        <h1 className="Welcome-header">
          {'Welcome to Shedify <3'}
        </h1>
        <p className="Welcome-text">
          {"Want to discover new artists, generate new playlists, or share your current favorites? It’s easy."}
        </p>
        <div className="Signin-container">
          <SignInButton spotifyAuthURL={this.props.spotifyAuthURL} />
        </div>
      </div>
    );
  }
}

class SignInButton extends Component {
  constructor(props) {
    super();
    this.openLoginPage = this.openLoginPage.bind(this);
  }

  openLoginPage() {
    window.open(this.props.spotifyAuthURL);
  }

  render() {
    return (
      <div>
      <button className="Signin-button" onClick={this.openLoginPage}> 
        Sign in with Spotify
      </button>
      <p>{this.props.spotifyAuthURL}</p>
      </div>
    );
  }
}

export default StartPage;