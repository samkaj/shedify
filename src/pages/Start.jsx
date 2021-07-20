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
          <SignInButton />
        </div>
      </div>
    );
  }
}

function SignInButton() {
  return (
    <button className="Signin-button">
      Sign in with Spotify
    </button>
  );
}

export default StartPage;