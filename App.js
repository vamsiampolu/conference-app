import React from 'react'
import { StyleSheet, View } from 'react-native'
// import EventDetails from './screens/EventDetails'
// import Schedule from './screens/Schedule'
import Feedback from './screens/Feedback'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Feedback />
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
