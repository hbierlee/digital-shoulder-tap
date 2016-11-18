import React, { Component } from 'react';

export default class UserListRow extends Component {
  render() {
    const user = this.props.user;
    return (
      <li>{user.displayName}</li>
    );
  }
}
