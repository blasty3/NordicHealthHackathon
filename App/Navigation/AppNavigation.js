import React from 'react'

import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import styles from './Styles/NavigationStyles'
import HomeScreen from '../Containers/Home/HomeScreen'
import CircleScreen from '../Containers/Circle/CircleScreen'
import ReportScreen from '../Containers/Report/ReportScreen'
import SettingScreen from '../Containers/Setting/SettingScreen'
import LoginScreen from '../Containers/Login/LoginScreen'
import RegisterScreen from '../Containers/Register/RegisterScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DataViewScreen from '../Containers/Setting/DataViewScreen'
import DataSourceScreen from '../Containers/Setting/DataSourceScreen'


const SettingNavigationStack = createStackNavigator(
  {
    SettingScreen: {
      screen: DataSourceScreen,
      navigationOptions: { header: null }
    },
    SystemSettingScreen: {
      screen: DataViewScreen,
      navigationOptions: { header: null }
    }
  }, {
    initialRouteName: 'SettingScreen',
  }
)


const HomeNavigationStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: { header: null }
    },
    DataSourceScreen: {
      screen: DataSourceScreen,
      navigationOptions: { header: null }
    },
    DataViewScreen: {
      screen: DataViewScreen,
      navigationOptions: { header: null }
    }
  }, {
    initialRouteName: 'HomeScreen',
  }
)

// Manifest of possible screens
const PrimaryNav = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeNavigationStack,
    navigationOptions: navigationOption("home", "Home")
  },
  CircleScreen: {
    screen: CircleScreen,
    navigationOptions: navigationOption("sync", "My Circle")
  },
  ReportScreen: {
    screen: ReportScreen,
    navigationOptions: navigationOption("chart-line-variant", "Report")
  },
  SettingScreen: {
    screen: SettingNavigationStack,
    navigationOptions: navigationOption("settings", "Settings")//TODO: i18n
  }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

const stackNavigation = createStackNavigator(
  {
    RegisterScreen: { screen: RegisterScreen },
    LoginScreen: { screen: LoginScreen },
    PrimaryNav: { screen: PrimaryNav },
  }, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LoginScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)

function navigationOption(name, title) {
  let option = {
    title: title,
    header: null,
    tabBarIcon: ({ tintColor }) => {
      return (<Icon
        name={name}
        size={28}
        color={tintColor}
        style={{ marginTop: 5, paddingBottom: 10 }}
      />)
    }
  }
  return option;
}



export default createAppContainer(stackNavigation)
