import React, { Component } from 'react';

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
      <button className={this.props.className} onClick={this.openLoginPage}> 
        Connect with Spotify
      </button>
      <p>{this.props.spotifyAuthURL}</p>
      </div>
    );
  }
}

export default SignInButton