import React, { Component } from 'react'
import DataSourceScreen from './DataSourceScreen';
import DataViewScreen from './DataViewScreen';

// Styles
export default class SettingScreen extends Component {
  constructor() {
    super()
    this.state = {
      isSelectDataSource: true
    }
  }
  render() {
    if (!this.state.isSelectDataSource) return <DataSourceScreen
    onPress={() => {
      this.setState({
        isSelectDataSource: true
      })
    }}/>
    return <DataViewScreen
      onPress={() => {
        this.setState({
          isSelectDataSource: false
        })
      }} />
  }
}
