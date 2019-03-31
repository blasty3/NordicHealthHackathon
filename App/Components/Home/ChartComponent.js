import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, FlatList } from 'react-native'
import { Metrics, Images, Colors } from '../../Themes'

// Styles
export default class ChartComponent extends Component {
  render() {
    let { title, chartData } = this.props
    console.log(chartData);
    
    return (
      <View>
        <Text style={styles.textTitleContent}>{title}</Text>
        <FlatList
          data={chartData}
          renderItem={({ item }) => this.renderItemContent(item)}
        />
      </View>
    )
  }

  renderItemContent = (item) => {
    console.log(item);
    
    return (
      <View style={styles.itemStContainer}>
        <Text style={styles.textSt}>{item.title}</Text>
        <Image source={Images.icon_chart} style={styles.chart} />
      </View>
    )
  }
}


const width = Metrics.sizeWidth
const height = Metrics.sizeHeight
const styles = StyleSheet.create({
  textTitleContent: {
    color: 'white',
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: Colors.red1,
    paddingTop: height * 2,
    paddingBottom: height * 2,
  },
  chart: {
    width:width*90,
    height:height*12,
    // alignSelf:"center",
    resizeMode:"stretch"
  },

  textSt: {
    color: Colors.red1,
    fontWeight: "100",
    marginLeft:width *4.5,
    marginBottom:width 
  },
  itemStContainer:{
    padding:width*3
  }
})