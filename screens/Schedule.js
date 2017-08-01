import React from 'react'
import {
  View,
  Image,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import ToggleButton from '../components/ToggleButton'

const heroImageSource = require('../assets/hero.png')
const logoImage = require('../assets/logo.png')
const items = ['THURSDAY', 'FRIDAY']

const thursdaySections = [
  {
    key: 0,
    title: '8:30 AM',
    data: [{key: 0, title: 'Registration, breakfast'}]
  },
  {
    key: 1,
    title: '10:00 AM',
    data: [{key: 1, title: 'Conference Keynote', speaker: 'Lucy Vatne'}]
  }
]

const fridaySections = [
  {
    key: 0,
    title: '8:30 AM',
    data: [{key: 0, title: 'More breakfast'}]
  },
  {
    key: 1,
    title: '12:00 PM',
    data: [{key: 1, title: 'More Keynote', speaker: 'Lucy Vatne'}]
  }
]

export default class Schedule extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedDay: 'THURSDAY'
    }

    this.onItemPress = this.onItemPress.bind(this)
  }

  onItemPress (item) {
    this.setState({
      selectedDay: item
    })
  }

  renderSectionHeader (itemProps) {
    const {section: item} = itemProps
    const {title} = item
    return (
      <View key={item.key} style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
    )
  }

  handlePressRow = item => {
    const {props} = this
    const {navigation} = props
    const {navigate} = navigation
    navigate('EventDetails', {item})
  }

  renderItem = itemProps => {
    const {handlePressRow} = this
    const {item} = itemProps
    const {title, speaker} = item
    return (
      <TouchableOpacity
        key={item.key}
        style={styles.row}
        onPress={handlePressRow}
      >
        <Text style={styles.rowTitle}>{title}</Text>
        <Text style={styles.rowText}>{speaker}</Text>
      </TouchableOpacity>
    )
  }

  render () {
    const {renderItem, renderSectionHeader, onItemPress, state} = this
    const {selectedDay} = state
    const sections = selectedDay === 'THURSDAY'
      ? thursdaySections
      : fridaySections
    return (
      <View style={styles.container}>
        <Image style={styles.hero} source={heroImageSource}>
          <Image style={styles.logo} source={logoImage} />
          <Text style={styles.title}>React Europe Conference</Text>
          <ToggleButton
            items={items}
            value={selectedDay}
            onItemPress={onItemPress}
          />
        </Image>
        <SectionList
          sections={sections}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
        />
      </View>
    )
  }
}

Schedule.navigationOptions = {
  header: null
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
  },
  sectionHeader: {
    backgroundColor: 'whitesmoke',
    padding: 20
  },
  row: {
    backgroundColor: 'white',
    padding: 20
  },
  rowTitle: {
    fontSize: 13,
    fontWeight: '500'
  },
  rowText: {
    fontSize: 13
  },
  sectionHeaderText: {
    fontSize: 13
  }
})
