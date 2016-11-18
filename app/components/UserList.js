import React, { Component } from 'react';

export default class UserList extends Component {
  render() {
    const users = this.props.users;
    console.log(users)
    return (
      <ul>
        <li>{users[0]}</li>
        <li>Kilian</li>
        <li>...</li>
      </ul>
    );
  }
}
