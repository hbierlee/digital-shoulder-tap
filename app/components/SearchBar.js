import React, { Component } from 'react'
import styles from './Components.css'

export default class SearchBar extends Component {

  render() {
    return (
      <div className={styles.searchbar}>
        <input
          type="text"
          placeholder="Filter..."
          name="username"
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
