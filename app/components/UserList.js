import React, { Component } from 'react';
import UserListRow from './UserListRow';

export default class UserList extends Component {
  render() {
    const users = this.props.users;
    console.log(users)
    return (
      <ul>
        {Object.keys(users).map(
          (key, index) => <UserListRow key={index} user={users[key]} />
          )}
      </ul>
    );
  }
}
