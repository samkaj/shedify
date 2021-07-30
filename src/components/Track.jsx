import React, { Component } from 'react';
import "../stylesheet/Generate.css";
import "../stylesheet/Track.css";

class Track extends Component {
  constructor(props) {
    super();
    this.trackName = props.trackName;
    this.artistName = props.artistName;
    this.songLength = props.songLength;
    this.albumCoverImageUrl = props.albumCoverImageUrl;
  }

  render() {
    return (
      <div className="Track-container">
        <img src={this.props.albumCoverImageUrl} alt={"album cover of " + this.props.artistName} />
        <div className="Track-info-wrapper">
          <h1>{this.props.trackName}</h1>
          <h2>{this.props.artistName}</h2>
          <h2 id="SongLength">{this.props.songLength}</h2>
        </div>
      </div>
    );
  }
}

export default Track;