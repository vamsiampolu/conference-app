import React from 'react'
import {StyleSheet, View} from 'react-native'
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation'

import EventDetails from './screens/EventDetails'
import Schedule from './screens/Schedule'
import Feedback from './screens/Feedback'
import {Ionicons} from '@expo/vector-icons'

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#050B7A'
  },
  headerTintColor: '#fff'
}

const createTabBarIconWrapper = (
  TabBarIconComponent,
  defaultProps
) => props => {
  debugger
  const {tintColor} = props
  return <TabBarIconComponent {...defaultProps} color={tintColor} />
}

const ScheduleStack = StackNavigator(
  {
    ScheduleList: {
      screen: Schedule
    },
    EventDetails: {
      screen: EventDetails
    }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      ...defaultNavigationOptions,
      tabBarIcon: createTabBarIconWrapper(Ionicons, {
        name: 'ios-calendar-outline',
        size: 30
      })
    }
  }
)

const FeedbackStack = StackNavigator(
  {
    FeedbackForm: {
      screen: Feedback
    }
  },
  {
    navigationOptions: {
      ...defaultNavigationOptions,
      tabBarIcon: createTabBarIconWrapper(Ionicons, {
        name: 'ios-contacts-outline',
        size: 30
      })
    }
  }
)

const AppNavigation = TabNavigator(
  {
    Schedule: {screen: ScheduleStack},
    Feedback: {screen: FeedbackStack}
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      labelStyle: {
        fontSize: 14
      },
      style: {
        backgroundColor: '#fff',
        height: 55
      },
      inactiveTintColor: '#888',
      activeTintColor: '#3454DA'
    }
  }
)

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <AppNavigation />
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
