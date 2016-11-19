// @flow
import React, { Component } from 'react'
import moment from 'moment'
import base from '../utils/base'

import SearchBar from '../components/SearchBar'
import UserList from '../components/UserList'
import Tap from '../components/Tap'
import Navbar from '../components/Navbar'


export default class App extends Component {


  constructor(props) {
    super(props)

    this.performTapTo = this.performTapTo.bind(this)

    this.user = 'henk'
    this.state = {
      users: {},
      receivedTaps: [],
    }

    this.receivedTapsHaveSynced = false
  }

  componentWillMount() {
    this.fetch = base.syncState('users/', {
      context: this,
      state: 'users',
    })

    this.receivedTapsRef = base.syncState(`tapsByUser/${this.user}/`, {
      context: this,
      state: 'receivedTaps',
      asArray: true,
      then() {
        this.receivedTapsHaveSynced = true
      },
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

    let lastReceivedTap = null
    let receivedFromDisplayName = null

    if (receivedTaps && receivedTaps.length > 0) {
      lastReceivedTap = receivedTaps[receivedTaps.length - 1]
      receivedFromDisplayName = users[lastReceivedTap.from].displayName
    }

    return (
      <div className="page">
        <Navbar
          title="👉 Tap"
        />

        <SearchBar
          users={users}
        />

        <UserList
          users={users}
          performTapTo={this.performTapTo}
        />

        <Tap
          lastReceivedTap={lastReceivedTap}
          receivedFromDisplayName={receivedFromDisplayName}
          receivedTapsHaveSynced={this.receivedTapsHaveSynced}
        />
      </div>
    )
  }
}
