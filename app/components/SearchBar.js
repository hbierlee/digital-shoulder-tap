import React, { Component, PropTypes } from 'react'
import styles from './Components.css'

export default class SearchBar extends Component {

  static PropTypes = {
    handleInputChange: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className={styles.searchbar}>
        <input
          type="text"
          placeholder="Filter..."
          name="username"
          onChange={this.props.handleInputChange}
          autoFocus
        />
        <i
          className="fa fa-search"
          aria-hidden="true"
        />
      </div>
    )
  }
}
