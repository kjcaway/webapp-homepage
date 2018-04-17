import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';

class About extends React.Component {
  render() {
    return (
      <div id="main">
        <div className="inner">

          <Header title="About Me"/>
          <p>안녕하세요~ kang입니다</p>
          <p>뚜뚜ㅜ후</p>

        </div>
      </div>);
  }
}

export default About;
