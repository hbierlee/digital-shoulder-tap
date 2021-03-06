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
    this.handleInputChange = this.handleInputChange.bind(this)
    this.user = process.env.USER
    this.state = {
      users: {},
      receivedTaps: [],
      input: '',
    }

    this.receivedTapsHaveSynced = false
  }

  componentWillMount() {
    this.fetch = base.syncState('users/', {
      context: this,
      state: 'users',
      then() {
        const users = {...this.state.users}
        users[this.user].online = true
        this.setState({users})
      }
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

    const users = {...this.state.users}
    users[this.user].online = false
    this.setState({users})
  }

  performTapTo(to) {
    const tap = {
      from: this.user,
      timestamp: moment().valueOf(),
    }

    base.push(`tapsByUser/${to}/`, {data: tap})
  }

  handleInputChange(event) {
    const input = event.target.value
    this.setState({input})
  }

  render() { 
    console.log('render app')
    const {users, receivedTaps, input} = this.state

    return (
      <div className="page">
        <Navbar
          title="👉 Tap"
        />

        <SearchBar
          users={users}
          handleInputChange={this.handleInputChange}
        />

        <UserList
          users={users}
          performTapTo={this.performTapTo}
          filter={input}
        />

        <Tap
          receivedTaps={receivedTaps}
          users={users}
        />
      </div>
    )
  }
}


// {lastReceivedTap={lastReceivedTap}
//           receivedFromDisplayName={receivedFromDisplayName}
//           receivedTapsHaveSynced={this.receivedTapsHaveSynced}}

//           