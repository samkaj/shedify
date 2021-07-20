import React, { Component } from 'react';
import "../stylesheet/Search.css";
import search from "../img/search_black_24dp.svg"
import expand_more from "../img/expand_more_black_24dp.svg"

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
    this.setState({ value: event.target.value === "" ? "Enter artist or track..." : event.target.value })

  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: "Enter artist or track..." })
  }

  clearInput() {
    this.setState({ value: this.state.value === "Enter artist or track..." ? "" : this.state.value })
  }

  fillInput() {
    this.setState({ value: this.state.value === "" ? "Enter artist or track..." : this.state.value })
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
        <CategoryDropdown />
      </div>
    );
  }
}

class CategoryDropdown extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      activeCategory: "Track"
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));

  }

  selectCategory(category) {
    this.setState({activeCategory: category});
    this.toggleDropdown();
  }

  render() {
    return (
      <div className="SearchCategory-container">
        <div className="SearchCategory-container">
          <a className="ActiveCategory-text" onClick={this.toggleDropdown}>{this.state.activeCategory}</a>
          <img className="Expand-button" id={this.state.expanded ? 'Expanded' : 'Closed'} onClick={this.toggleDropdown} src={expand_more} alt="toggle drop down menu" />
        </div>
        <ul className={this.state.expanded ? 'SearchCategory-dropdown' : 'SearchCategory-hidden'}>
          <li onClick={() => this.selectCategory('Track')}>
            {"Track"}
          </li>
          <li onClick={() => this.selectCategory('Artist')}>
            {"Artist"}
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchBar