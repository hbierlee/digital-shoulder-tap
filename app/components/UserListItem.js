import React, { Component } from 'react';
import styles from './UserList.css'

export default class UserListItem extends Component {
  render() {
    const user = this.props.user;
    return (
      <li className={styles.item}>{user.displayName}</li>
    );
  }
}
