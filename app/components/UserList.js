import React, {
  Component,
  PropTypes,
} from 'react'
import UserListItem from './UserListItem'
import styles from './UserList.css'

export default class UserList extends Component {

  static propTypes = {
    users: PropTypes.object.isRequired,
    performTapTo: PropTypes.func.isRequired,
  }

  render() {
    const { users, performTapTo } = this.props
    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          {Object.keys(users).map(
            (key, index) => <UserListItem
              userId={key}
              user={users[key]}
              key={index}
              performTapTo={performTapTo}
            />
            )}
        </ul>
      </div>
    )
  }
}
