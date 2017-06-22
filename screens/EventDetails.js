import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

export default class EventDetails extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Conference Keynote</Text>
          <Text style={styles.subtitle}>May 18, 2017</Text>
          <Text style={styles.description}>Hear about awesome stuff</Text>
        </View>
        <View style={styles.speakerContainer}>
          <Image style={styles.image} source={{uri: 'https://unsplash.it/200/200?image=1025'}} />
          <View>
            <Text style={styles.speaker}>Lucy Vatne</Text>
            <Text style={styles.bio}>The best doggo ever</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
  detailsContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray'
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  subtitle: {
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '500'
  },
  description: {
    marginBottom: 4,
    fontSize: 13
  },
  speakerContainer: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  speaker: {
    color: 'purple',
    fontSize: 18,
    fontWeight: '500'
  },
  bio: {
    fontSize: 13
  }
})
