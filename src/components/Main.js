import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import Header from './Header.js';

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <div className="inner">
          <Header title="게시판"/>

          <section>
            <header className="major">
              <h2>Ipsum sed dolor</h2>
            </header>
            <div className="posts">
              <article>
                <a href="#" className="image"><img src="images/pic01.jpg" alt=""/></a>
                <h3>Interdum aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button">More</a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic02.jpg" alt=""/></a>
                <h3>Nulla amet dolore</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button">More</a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic03.jpg" alt=""/></a>
                <h3>Nulla amet dolore</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button">More</a>
                  </li>
                </ul>
              </article>
            </div>
          </section>

        </div>
      </div>);
  }
}

export default Main;
