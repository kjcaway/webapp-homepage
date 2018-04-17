import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
  render () {
    return(
      <header id="header">
        <NavLink to="/" className="logo"><strong>{this.props.title}</strong></NavLink>
        <ul className="icons">
          <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
