import React, {
  Component,
  PropTypes
} from 'react';
import UserListItem from './UserListItem';
import styles from './UserList.css';

export default class UserList extends Component {

  static propTypes = {
    users: PropTypes.object.isRequired,
    performTapTo: PropTypes.func.isRequired,
  };

  render() {
    const { users, performTapTo } = this.props;
    console.log(users)
    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          {Object.keys(users).map(
            (key, index) => <UserListItem
              name={users[key].displayName}
              key={index}
              user={users[key]}
              onclick={() => performTapTo(key)}
            />
            )}
        </ul>
      </div>
    );
  }
}
