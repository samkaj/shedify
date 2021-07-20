import React, { Component } from 'react';
import "../stylesheet/Search.css";
import search from "../img/search_black_24dp.svg"

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: "Enter artist or track..."
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value=== "" ? "Enter artist or track..." : event.target.value})
    
  }

  handleSubmit(event) {
    console.log("-heya");
    event.preventDefault();
    this.setState({value: "Enter artist or track..."})
  }

  clearInput() {
    this.setState({value: this.state.value === "Enter artist or track..." ? "" : this.state.value})
  }

  fillInput() {
    this.setState({value: this.state.value === "" ? "Enter artist or track..." : this.state.value})
  }

  render() {
    return (
      <div className="Search-container">
        <div className="SearchField-container">
          <form onSubmit={this.handleSubmit}>
            <button type="submit" className="Submit-button">
              <img alt="search icon" className="SearchField-img" src={search} />
            </button>
            <input onFocus={this.clearInput} onChange={this.handleChange} className="SearchField-input" type="text" value={this.state.value} />
          </form>
        </div>
        <div className="SearchCategory-container">
          <ul>
            <li>Track</li>
            <li>Artist</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar