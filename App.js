import React from 'react'
import { StyleSheet, View } from 'react-native'
import {StackNavigator} from 'react-navigation'

import EventDetails from './screens/EventDetails'
import Schedule from './screens/Schedule'
// import Feedback from './screens/Feedback'

const ScheduleStack = StackNavigator({
  ScheduleList: {
    screen: Schedule
  },
  EventDetails: {
    screen: EventDetails
  }
}, {
  headerMode: 'screen'
})

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ScheduleStack />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  }
})

