import React, { Component, PropTypes } from 'react'
import { playAudio } from '../utils/audioplayer'

export default class Tap extends Component {

  static PropTypes = {
    receivedTaps: PropTypes.object,
  }

  componentWillUpdate() {
    playAudio()
    console.log('ping')
  }

  render() {
    return null
  }
}

// TODO WHY DOES THIS NOT WORK??!?!?!
// { receivedTaps && receivedTaps.length > 0 ? 
//         <p>
//           Last received tap from: {receivedTaps[receivedTaps.length - 1].from} 
//         </p>
//         :
//         <p>No taps received yet</p>
//       }