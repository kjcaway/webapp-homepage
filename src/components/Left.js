import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';

class Left extends React.Component {
  componentDidMount() {
    $(function() {
      let $window = $(window);
      // let $head = $('head');
      // let $body = $('body');

      // Menu.
      let $menu = $('#menu');
      let $menuOpener = $menu.children('ul').find('.opener');

      // Openers.
      $menuOpener.each(function() {
        let $this = $(this);

        $this.on('click', function(event) {
          // Prevent default.
          event.preventDefault();

          // Toggle.
          $menuOpener.not($this).removeClass('active');
          $this.toggleClass('active');

          // Trigger resize (sidebar lock).
          $window.triggerHandler('resize.sidebar-lock');
        });
      });
    });
  }
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
              <NavLink to="/">Main</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <span className="opener">Submenu</span>
              <ul>
                <li>
                  <a href="#">Lorem Dolor</a>
                </li>
                <li>
                  <a href="#">Ipsum Adipiscing</a>
                </li>
                <li>
                  <a href="#">Tempus Magna</a>
                </li>
                <li>
                  <a href="#">Feugiat Veroeros</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

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
