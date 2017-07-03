import React from 'react'
import {Constants} from 'expo'
import {ScrollView, View, Text, StyleSheet, StatusBar, TextInput, Slider, Switch} from 'react-native'

import GrowingTextInput from '../components/GrowingInput'

export default class Feedback extends React.Component {
  constructor (props) {
    super(props)
    this.emailRef = this.emailRef.bind(this)
    this.phoneRef = this.phoneRef.bind(this)
    this.feedbackInputRef = this.feedbackInputRef.bind(this)
    this.sliderRef = this.sliderRef.bind(this)

    this.onSubmitFullName = this.onSubmitFullName.bind(this)
    this.onSubmitEmail = this.onSubmitEmail.bind(this)
    this.onSubmitPhoneNumber = this.onSubmitPhoneNumber.bind(this)
    this.onSubmitFeedbackText = this.onSubmitFeedbackText.bind(this)
    this.onUrgencyChange = this.onUrgencyChange.bind(this)

    this.state = {
      urgent: true
    }
  }

  emailRef (view) {
    this._emailInput = view
  }

  phoneRef (view) {
    this._phoneInput = view
  }

  feedbackInputRef (view) {
    this._feedbackInput = view
  }

  sliderRef (view) {
    this._slider = view
  }

  onSubmitFullName () {
    this._emailInput.focus()
  }

  onSubmitEmail () {
    this._phoneInput.focus()
  }

  onSubmitPhoneNumber () {
    this._feedbackInput.focus()
  }

  onSubmitFeedbackText () {
    this._slider.focus()
  }

  onUrgencyChange () {
    this.setState(now => {
      const {urgent} = now
      return {urgent: !urgent}
    })
  }

  render () {
    const {
      state,
      emailRef,
      phoneRef,
      feedbackInputRef,
      sliderRef,
      onSubmitFullName,
      onSubmitEmail,
      onSubmitPhoneNumber,
      onSubmitFeedbackText,
      onUrgencyChange
    } = this
    const {urgent} = state
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.title}>Feedback Screen</Text>
        </View>
        <ScrollView
          style={styles.scrollContainer}
          keyboardDismissMode='on-drag'
        >
          <Text style={styles.sectionHeader}>Contact Information</Text>
          <View style={[styles.row, styles.firstRow]}>
            <TextInput
              placeholder='Full Name'
              style={styles.input}
              autoCapitalize='words'
              autoCorrect={false}
              returnKeyType='next'
              onSubmitEditing={onSubmitFullName}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              placeholder='Email'
              style={styles.input}
              autoCorrect={false}
              autoCapitalize='none'
              returnKeyType='next'
              keyboardType='email-address'
              ref={emailRef}
              onSubmitEditing={onSubmitEmail}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              placeholder='Phone Number'
              keyboardType='phone-pad'
              returnKeyType='next'
              style={styles.input}
              ref={phoneRef}
              onSubmitEditing={onSubmitPhoneNumber}
              blurOnSubmit={false}
            />
            <Text style={styles.sectionHeader}>Feedback</Text>
            <View style={styles.row}>
              <GrowingTextInput
                placeholder='Please provide ample and adequate feedback to help us help you and organize a better conference'
                minHeight={80}
                ref={feedbackInputRef}
                autoCapitalize='sentences'
                onSubmitEditing={onSubmitFeedbackText}
              />
            </View>
            <View style={[styles.row, styles.sliderContainer]}>
              <Text style={styles.sliderPrev}>Sad</Text>
              <Slider style={styles.slider} ref={sliderRef} />
              <Text style={styles.sliderNext}>Happy</Text>
            </View>
          </View>
          <View style={[styles.row, styles.switchContainer]} >
            <Text style={styles.switchText}>This feedback is urgent</Text>
            <Switch style={styles.switch} value={urgent} onValueChange={onUrgencyChange} />
          </View>
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
  },
  input: {
    flex: 1,
    height: 50
  },
  growingTextInput: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 15
  },
  row: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    paddingHorizontal: 5
  },
  firstRow: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc'
  },
  sliderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  slider: {
    flex: 0.75,
    alignSelf: 'stretch'
  },
  sliderPrev: {
    flex: 0.125
  },
  sliderNext: {
    flex: 0.125
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  switch: {
    flex: 0.125
  },
  switchText: {
    flex: 0.875
  }
})
