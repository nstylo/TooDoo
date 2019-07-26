import React, { Component } from 'react';
import TodoList from './TodoList';
import { Route } from 'react-router-dom';
import axios from 'axios';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  async submitData() {
    const request = await axios
      .post('/login/', {
        username: this.state.username,
        password: this.state.password
      })
      .then(this.reRoute())
      .catch(err => {
        console.log('error:' + err);
      });

    // this.setState({ username: '', password: '' });
  }

  async reRoute() {}

  render() {
    const style = {
      position: 'fixed',
      right: 0,
      left: 0,
      top: 0,
      bottom: 0,
      margin: 'auto',
      width: '200px',
      height: '100px',
      background: 'white',
      padding: '30px 30px'
    };

    return (
      <div style={style}>
        <input
          value={this.state.username}
          type="test"
          placeholder="username"
          onChange={e => this.setState({ username: e.target.value })}
          required
        />
        <input
          value={this.state.password}
          type="test"
          placeholder="login"
          onChange={e => this.setState({ password: e.target.value })}
          required
        />
        <button style={{ marginTop: '10px' }} onClick={this.submitData.bind(this)}>
          login
        </button>
      </div>
    );
  }
}

export default LoginPage;
