import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';

class Login extends React.Component {
  render () {
    return(
      <div id="main">
        <div className="inner">
          <Header title="Login"/>
          <h2>로그인</h2>
          <form id="loginform" method="post" action="#">
            <div className="row uniform 100%">
                <div className="6u 12u$(xsmall)">
                  <input type="text" name="userid" id="userid"  placeholder="User ID" />
                </div>

                <div className="6u 12u$(xsmall)">
                  <input type="password" name="password" id="password"  placeholder="Password" />
                </div>
              <ul className="actions">
                <li><a href="#" className="button special">로그인</a></li>
                <li><a href="#" className="button">회원가입</a></li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
