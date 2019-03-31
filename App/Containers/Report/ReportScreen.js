import React, { Component } from 'react'
import {
  Text, View, FlatList, ScrollView, Switch,
  Image, TouchableOpacity
} from 'react-native';
import HeaderComponent from '../../Components/Header/HeaderComponent'
import initData from '../../App/initData'
import styles from './ReportStyles';
import { Colors, Images, Metrics } from '../../Themes'

// Styles
export default class ReportScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent titleScreen="Health Report" onPress={() => { this.props.navigation.navigate("ReportHealthDataScreen") }} />
        <ScrollView>
          <View style={{ alignItems: "center", justifyContent: "center", marginTop: Metrics.sizeHeight * 4, marginBottom: Metrics.sizeHeight * 4}}>
            <Text style={styles.text}>compose a health data report</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" ,marginBottom:Metrics.sizeHeight * 5}}>
            <Text style={styles.textReport}>ReportScreen</Text>
            <View style={styles.downContainer}>
              <Text style={styles.textDown}>past 3 months</Text>
              <Image source={Images.icon_down} style={styles.iconDown} />

            </View>
          </View>
          <FlatList
            data={initData.reportData}
            renderItem={({ item }) => this.renderItemContent(item)}
          />
           <View style={styles.buttonContainer}>
            <TouchableOpacity  onPress={() => {
              this.props.navigation.navigate("ReportHealthDataScreen")
            }}>
              <Text style={styles.textButton}>Generate report</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }

  renderItemContent = (item) => {
    return (
      <View style={styles.itemStContainer}>
        <Text style={styles.textSt}>{item.text}</Text>
        <Switch
          thumbColor={"white"}
          trackColor={Colors.grey6}
          ios_backgroundColor={Colors.grey6}
          onTintColor={Colors.red1}
          // style={{backgroundColor:Colors.grey6}}
          value={item.value}
        />
      </View>
    )
  }
}
