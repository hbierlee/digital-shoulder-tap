// @flow
import React, { Component, PropTypes } from 'react';
import base from '../utils/base';
import UserList from '../components/UserList';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: '',
      users: {},
      taps: {},
    };
  }

  componentWillMount() {
    this.fetch = base.syncState(`users/`, {
      context: this,
      state: 'users',
    });

    this.tapsRef = base.syncState(`taps/`, {
      context: this,
      state: 'taps',
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.usersRef)
    base.removeBinding(this.tapsRef)
  }

  render() {
    const users = this.state.users;

    return (
      <div>
        <h1>Digital Shoulder Tap</h1>

        <h2>Users</h2>
        <UserList users={users}></UserList>

        <p>Made by team hackers</p>
      </div>
    );
  }
}
