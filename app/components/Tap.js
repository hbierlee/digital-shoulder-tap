import React, { Component, PropTypes } from 'react'
import { playAudio } from '../utils/audioplayer'

export default class Tap extends Component {

  static PropTypes = {
    receivedTaps: PropTypes.object,
    users: PropTypes.object,
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.receivedTaps)
    const render = this.props.receivedTaps.length !== 0 && !Object.is(this.props.receivedTaps, nextProps.receivedTaps)
    return render
  }

  render() {
    const {receivedTaps, users} = this.props

    const displayName =
      users && receivedTaps && receivedTaps.length > 0 ?
      users[receivedTaps[receivedTaps.length - 1].from].displayName
      :
      null

    if (displayName) {
      const notificationText = `You received a tap from ${displayName}`
      new Notification(notificationText, {silent: true})
      playAudio()
      console.log('ping')
    } 
    return null
  }
}

