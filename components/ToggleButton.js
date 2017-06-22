import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

export class ToggleButton extends React.Component {

  constructor (props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress () {
    const {props} = this
    const {item, onPress} = props
    onPress(item)
  }

  render () {
    const {onPress, props} = this
    const {item, index, value} = props
    const marginLeft = index === 0 ? 0 : 10
    const backgroundColor = value === item ? 'purple': 'maroon'
    const buttonStyle = [styles.button, {marginLeft, backgroundColor}]

    return (<TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{item}</Text>
    </TouchableOpacity>)
  }

}

export default class ToggleButtonGroup extends React.Component {
  constructor (props) {
    super(props)
    this.onItemPress = this.onItemPress.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  onItemPress (item) {
    const {onItemPress} = this.props
    onItemPress(item)
  }

  renderItem (item, index) {
    const {onItemPress, props} = this
    const {value} = props
    return (<ToggleButton key={item} item={item} index={index} onPress={onItemPress} value={value} />)
  }

  render () {
    const {items, value} = this.props
    return (<View style={styles.container}>
      {items.map(this.renderItem)}
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 30
  },
  button: {
    backgroundColor: 'purple',
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
})
