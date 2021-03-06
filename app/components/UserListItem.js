import React, { Component, PropTypes } from 'react'
import styles from './Components.css'

export default class UserListItem extends Component {

  static propTypes = {
    userId: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    performTapTo: PropTypes.func.isRequired,
    online: PropTypes.bool,
  }

  render() {
    const {user, userId, performTapTo} = this.props
    return (
      <li
        className={styles.item}
        onClick={() => performTapTo(userId)}
      >
        <i className={'fa fa-dot-circle-o ' + (this.props.online ? styles.online : styles.offline)} aria-hidden="true" />
        {" " + user.displayName}
      </li>
    )
  }
}
