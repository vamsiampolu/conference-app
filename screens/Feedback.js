import React from 'react'
import {Constants} from 'expo'
import {ScrollView, View, Text, StyleSheet, StatusBar} from 'react-native'

export default class Feedback extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.title}>Feedback Screen</Text>
        </View>
        <ScrollView
          style={styles.scrollContainer}
        >
          <Text style={styles.sectionHeader}>Contact Information</Text>
        </ScrollView>
        <StatusBar barStyle='light-content' />
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flex: 1,
    paddingVertical: 65
  },
  navbar: {
    height: 65,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#050B7A'
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600'
  },
  sectionHeader: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 15,
    fontWeight: '400'
  }
})
