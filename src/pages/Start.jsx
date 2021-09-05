import React, { Component } from 'react';
import SignInButton from '../components/SignInButton';
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
          <SignInButton className={'Signin-button'} spotifyAuthURL={this.props.spotifyAuthURL} />
        </div>
      </div>
    );
  }
}

export default StartPage;