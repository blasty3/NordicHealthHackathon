import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, 
  TouchableOpacity ,Switch} from 'react-native'
import HeaderComponent from '../../Components/Header/HeaderComponent';
import styles from './SettingStyles'
import { Colors, Metrics } from '../../Themes';

// Styles
export default class SettingDataSourceScree extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent
          titleScreen={"Data Sources Settings"}
          onPress={()=>this.props.onPress()}
        />
        <ScrollView style={{ marginTop: Metrics.sizeHeight * 2 }}>

          {this.renderContent("Personal Health", initData.homePersonalHealth)}
          {this.renderContent("Environmental data", initData.homeEnvironmentalData)}
          {this.renderContent("Hospital data", initData.homeHospitalData)}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {
            }}>
              <Text style={styles.textButton}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }

  renderContent = (title, data) => {
    return (
      <View>
        <Text style={styles.textTitleContent}>{title}</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => this.renderItemContent(item)}
        />
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
