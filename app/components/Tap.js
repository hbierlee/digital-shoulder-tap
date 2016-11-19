import React, { Component, PropTypes } from 'react'

export default class Tap extends Component {

  static PropTypes = {
    receivedTaps: PropTypes.object,
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('ping')
  }

  render() {
    const receivedTaps = this.props.receivedTaps
    const lastReceivedTap = receivedTaps[receivedTaps.length - 1]

    return (
      <p>Last received tap: {JSON.stringify(lastReceivedTap)}</p>
    )
  }
}
