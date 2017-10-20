import React, { Component } from 'react';

class LogIn extends Component {
  render() {
    return (
      <section className="dashboard__logIn">
        <div className="container">
          <div className="login-container">
            <div id="output"></div>
            <div className="avatar"></div>
            <div className="form-box">
              <form action="" method="">
                <input name="user" type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button className="btn btn-info btn-block login" type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LogIn;
