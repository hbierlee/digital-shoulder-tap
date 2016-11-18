// @flow
import React, { Component, PropTypes } from 'react';

import UserList from '../components/UserList';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: ['Henk', 'Kilian']
    };
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
