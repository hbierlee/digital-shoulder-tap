// @flow
import React, { Component } from 'react';
import moment from 'moment';
import base from '../utils/base';

import UserList from '../components/UserList';

export default class App extends Component {


  constructor(props) {
    super(props);

    this.performTapTo = this.performTapTo.bind(this);

    this.state = {
      users: {},
      taps: {},
    };
  }

  componentWillMount() {
    this.fetch = base.syncState('users/', {
      context: this,
      state: 'users',
    });

    this.tapsRef = base.syncState('taps/', {
      context: this,
      state: 'taps',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.usersRef);
    base.removeBinding(this.tapsRef);
  }

  performTapTo(to) {
    console.log('perform tap to ' + to);
    const user = 'henk';
    const timestamp = moment().valueOf();
    const tap = { from: user, to, timestamp };
    this.setState({ taps: [this.state.taps, tap] });
  }

  render() {
    const users = this.state.users;

    return (
      <div>
        <h1>Digital Shoulder Tap</h1>

        <h2>Users</h2>
        <UserList users={users} performTapTo={this.performTapTo} />

        <p>Made by team hackers</p>
      </div>
    );
  }
}
