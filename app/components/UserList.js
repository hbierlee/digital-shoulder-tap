import React, { Component } from 'react';
import UserListItem from './UserListItem';
import styles from './UserList.css';

export default class UserList extends Component {
  render() {
    const users = this.props.users;
    console.log(styles.container)
    return (
      <div className={styles.container}>
        
      <ul className={styles.list}>
        {Object.keys(users).map(
          (key, index) => <UserListItem key={index} user={users[key]} />
          )}
      </ul>
      </div>
    );
  }
}
