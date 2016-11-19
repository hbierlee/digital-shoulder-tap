// @flow
import React, { Component } from 'react'
import moment from 'moment'
import base from '../utils/base'

import UserList from '../components/UserList'
import Tap from '../components/Tap'

export default class App extends Component {


  constructor(props) {
    super(props)

    this.performTapTo = this.performTapTo.bind(this)

    this.user = 'henk'
    this.state = {
      users: {},
      receivedTaps: [],
    }
  }

  componentWillMount() {
    console.log(this.user)
    this.fetch = base.syncState('users/', {
      context: this,
      state: 'users',
    })

    this.receivedTapsRef = base.syncState(`tapsByUser/${this.user}/`, {
      context: this,
      state: 'receivedTaps',
      asArray: true,
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.usersRef)
    base.removeBinding(this.receivedTapsRef)
  }

  performTapTo(to) {
    const tap = { 
      from: this.user, 
      timestamp: moment().valueOf(),
    }

    base.push(`tapsByUser/${to}/`, {data: tap})
  }

  render() {
    console.log('render app')

    const {users, receivedTaps} = this.state

    return (
      <div>
        <h1>Digital Shoulder Tap</h1>

        <h2>Users</h2>
        <UserList
          users={users}
          performTapTo={this.performTapTo}
        />

        <p>Made by team hackers</p>

        <Tap user={this.user} receivedTaps={receivedTaps} />
      </div>
    )
  }
}
