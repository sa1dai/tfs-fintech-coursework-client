import React, {Component} from 'react';
import './header.css';
import {Link} from "react-router-dom";

class Header extends Component {
  onHomeClick = () => {

  };

  render() {
    return (
      <div className="header">
        <Link to="/" className="home-link"><i className="fas fa-home"/></Link>
        <div className="logo-wrapper">
          <span className="logo">TFS Coursework Spring 2019</span>
        </div>
      </div>
    )
  }
}

export default Header;