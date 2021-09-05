import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SignInButton from './SignInButton';
import "../stylesheet/Navbar.css";
import close from "../img/close_black_24dp.svg";
import menu from "../img/menu_white_24dp.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.listItems = this.props.pages.map((page) =>
      <ListItem
        key={page.toString()}
        value={page.toString()}
        path={page.toString() === 'Start' ? '/' : '/' + page.toString()}
        closeMenu={this.closeMenu.bind(this)}
      />
    );
    this.state = {expanded: false}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  closeMenu() {
    this.setState(() => ({
      expanded: false
    }));
  }

  render() {
    return (
      <div className="Navbar-wrapper">
        <div className={this.state.expanded ? "Navbar-body Navbar-expanded" : "Navbar-body Navbar-closed"}>
          <ul className="Navbar-pages">
            <li className="Toggle-button">
              <img alt={this.state.expanded ? "close menu icon" : "open menu icon"} className="Menu-icon" src={this.state.expanded ? close : menu} onClick={this.handleClick} />
            </li>
            {this.listItems}
            <li>
              <SignInButton className={'Navbar-signin-button'} spotifyAuthURL={this.props.spotifyAuthURL} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class ListItem extends Component {
  render() {
    return (
      <li className="Navbar-page">
        <NavLink
          to={this.props.path}
          exact={this.props.path==='/'}
          activeClassName='Active'
          onClick={()=>this.props.closeMenu()}
        >
          {this.props.value}
        </NavLink>
      </li>
    );
  }
}

export default Navbar;