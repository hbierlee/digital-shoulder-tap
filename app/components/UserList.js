import React, {
  Component,
  PropTypes,
} from 'react'
import UserListItem from './UserListItem'
import styles from './Components.css'

export default class UserList extends Component {

  static propTypes = {
    users: PropTypes.object.isRequired,
    performTapTo: PropTypes.func.isRequired,
    filter: PropTypes.string,
  }

  render() {
    const { users, performTapTo, filter } = this.props
    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          {Object.keys(users)
            .filter((key) => key.match(filter))
            .map(
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
