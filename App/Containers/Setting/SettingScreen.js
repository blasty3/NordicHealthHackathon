import React, { Component } from 'react'
import SettingDataSourceScree from './SettingDataSourceScree';
import SettingSelectScreen from './SettingSelectScreen';

// Styles
export default class SettingScreen extends Component {
  constructor() {
    super()
    this.state = {
      isSelectDataSource: true
    }
  }
  render() {    
    if (!this.state.isSelectDataSource) return <SettingDataSourceScree 
    onPress={() => {
      this.setState({
        isSelectDataSource: true
      })
    }}/>
    return <SettingSelectScreen
      onPress={() => {
        this.setState({
          isSelectDataSource: false
        })
      }} />
  }
}
