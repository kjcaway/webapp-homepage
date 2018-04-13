import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

class About extends React.Component {
  render() {
    return (<div id="main">
      <div className="inner">

        <header id="header">
          <NavLink to="/" className="logo"><strong>메인</strong></NavLink>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>
        </header>
        <p>안녕하세요~ kang입니다</p>
        <p>뚜뚜ㅜ후</p>

      </div>
    </div>);
  }
}

export default About;
