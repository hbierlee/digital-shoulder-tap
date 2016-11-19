import React, { Component, PropTypes } from 'react'
import styles from './Components.css'

export default class Navbar extends Component {
  
  static PropTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <div className={styles.navbar}>
        <h1>{this.props.title}</h1>
        <a>
          <i className="fa fa-times-circle fa-lg" aria-hidden="true" />
        </a>
      </div>
    )
  }
}
