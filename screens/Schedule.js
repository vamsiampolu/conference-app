import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import ToggleButton from '../components/ToggleButton'

const heroImageSource = require('../assets/hero.png')
const logoImage = require('../assets/logo.png')
const items = ['THURSDAY', 'FRIDAY']

export default class Schedule extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedDay: 'THURSDAY'
    }
    this.onItemPress = this.onItemPress.bind(this)
  }

  onItemPress (item) {
    console.log(item)
    this.setState({
      selectedDay: item
    })
  }

  render () {
    const {state, onItemPress} = this
    const {selectedDay} = state

    return (<View style={styles.container}>
      <Image style={styles.hero} source={heroImageSource} >
        <Image style={styles.logo} source={logoImage} />
        <Text style={styles.title}>React Europe Conference</Text>
        <ToggleButton items={items} value={selectedDay} onItemPress={onItemPress} />
      </Image>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hero: {
    height: null,
    width: null,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 40,
    width: 46,
    marginBottom: 10
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 24,
    marginBottom: 10
  }
})
