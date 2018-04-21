import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

class Left extends React.Component {
  render() {
    return (<div id="sidebar">
      <div className="inner">

        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search"/>
          </form>
        </section>

        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li>
              <NavLink to="/" >게시판</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li style={{display:"none"}}>
              <span className="opener">하위메뉴</span>
              <ul>
                <li>
                  <a href="#">1111</a>
                </li>
                <li>
                  <a href="#">2222</a>
                </li>
                <li>
                  <a href="#">3333</a>
                </li>
                <li>
                  <a href="#">4444</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <ul className="actions">
          <li><NavLink to="/login" className="button">로그인</NavLink></li>
          <li><NavLink to="/" className="button">회원가입</NavLink></li>
        </ul>
        <footer id="footer">
          <p className="copyright">&copy; Untitled. All rights reserved. Demo Images:
            <a href="https://unsplash.com">Unsplash</a>. Design:
            <a href="https://html5up.net">HTML5 UP</a>.</p>
        </footer>

      </div>
    </div>);
  }
}

export default Left;
