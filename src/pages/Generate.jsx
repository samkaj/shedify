import React, { Component } from 'react';
import "../stylesheet/Generate.css"
import SearchBar from '../components/Searchbar';

class GeneratePage extends Component {
  render() {
    return (
      <div className="Generate-wrapper">
        <h1 className="Generate-header">
          {"Generate a new playlist based on a favorite song or artist."}
        </h1>
        <SearchBar />
        <div className="Generate-container">
          <h1>This is the generate page.</h1>
        </div>
      </div>
    );
  }
}

export default GeneratePage;
