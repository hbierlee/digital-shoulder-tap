import React, { Component, PropTypes } from 'react';
import styles from './UserList.css';

export default class UserListItem extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const name = this.props.name;
    return (
      <li className={styles.item}>{name}</li>
    );
  }
}
