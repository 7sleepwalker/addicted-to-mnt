import React, { Component } from 'react';
import propTypes from "prop-types";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../Actions/dashboardActions';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: ''
    }

    this.handleLogIn = this.handleLogIn.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
  }

  handleLogIn(e) {
    e.preventDefault();
    this.props.dispatch(logIn(this.state.userName, this.state.password));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.user);
    if(!nextProps.user.error)
      this.context.router.history.push('/dashboard/panel');
  }

  handleUserName(e) {
    this.setState({userName: e.target.value});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  render() {
    let errorShow = '';
    this.props.user.error ?
      errorShow = 'logIn__error--active' :
      errorShow = '';
    return (
      <section className="dashboard__logIn">
        <div className="container">
          <div className="login-container">
            <div id="output"></div>
            <div className="avatar"></div>
            <div className="form-box">
              <div className={`logIn__error ${errorShow}`}>
                {this.props.user.error}
              </div>
              <form>
                <input name="user" type="text" value={this.state.userName} placeholder="username" onChange={this.handleUserName} />
                <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePassword} />
                <Link to={"/"} className="btn btn-info btn-block login" onClick={this.handleLogIn}>Continue</Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.dashboard
  };
}

LogIn.contextTypes = {
  router: propTypes.object
};

export default connect(mapStateToProps)(LogIn);
