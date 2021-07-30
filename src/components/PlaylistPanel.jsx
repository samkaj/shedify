import React, { Component } from 'react';
import Track from './Track';
import "../stylesheet/Generate.css";
import "../stylesheet/Track.css";

class PlaylistPanel extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Generate-results">
        <h1>Results</h1>
        <Track
          trackName="Lost Without You"
          artistName="Freya Ridings"
          songLength="3:12"
          albumCoverImageUrl="https://dynamicmedia.livenationinternational.com/Media/p/s/i/f9567a0f-cf77-4bf7-9e04-6f96ca07720a.jpg?auto=webp&width=1507.2"
        />
      </div>
    );
  }
}

export default PlaylistPanel;