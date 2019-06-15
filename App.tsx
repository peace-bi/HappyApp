/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import { Home } from 'pages/Home'
import React from 'react'
import * as RNLocalize from 'react-native-localize'
import { useScreens } from 'react-native-screens'
import { createAppContainer, createStackNavigator } from 'react-navigation'

// tslint:disable-next-line:react-hooks-nesting
useScreens()

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Home',
        headerBackTitle: 'A much too long text for back button from B to A',
        headerTruncatedBackTitle: 'to A'
      })
    }
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      title: 'Nancy',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)
const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  constructor(props: any) {
    super(props)

    RNLocalize.addEventListener('change', this.handleLocalizationChange)
  }

  handleLocalizationChange = () => {
    // Implment change language
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange)
  }

  render() {
    return <AppContainer />
  }
}
