import React, { Component } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Images, Metrics } from '../../Themes'
import styles from '../Setting/SettingStyles'
import HeaderComponent from '../../Components/Header/HeaderComponent'

// Styles
export default class CircleScreen extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent
          titleScreen={"my circle"}
          onPress={()=> {}}
        />
        <ScrollView style={{ marginTop: Metrics.sizeHeight * 20 }}>
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Image source={Images.my_circle} style={styles.chart} />
          </View>
        </ScrollView>
      </View>
    )
  }
}
