import React, { Component } from 'react';
import "../stylesheet/Generate.css";
import SearchBar from '../components/Searchbar';
import SettingsPanel from '../components/SettingsPanel';
import PlaylistPanel from '../components/PlaylistPanel';

class GeneratePage extends Component {
  render() {
    return (
      <div className="Generate-wrapper">
        <h1>
          {"Generate"}
        </h1>
        <p>
          {"Create a new playlist based on a favorite song or artist."}
        </p>
        <SearchBar />
        <div className="Generate-container">
          <PlaylistPanel />
          <SettingsPanel />
        </div>
      </div>
    );
  }
}

export default GeneratePage;
