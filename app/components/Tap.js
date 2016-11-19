import React, { Component, PropTypes } from 'react'
import { playAudio } from '../utils/audioplayer'

export default class Tap extends Component {

  static PropTypes = {
    receivedTaps: PropTypes.object,
  }

  componentWillUpdate() {
    playAudio()
  }

  render() {
    const receivedTaps = this.props.receivedTaps
    const lastReceivedTap = receivedTaps[receivedTaps.length - 1]

    return (
      <p>Last received tap: {JSON.stringify(lastReceivedTap)}</p>
    )
  }
}
