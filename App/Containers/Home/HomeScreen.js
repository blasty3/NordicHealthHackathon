import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, 
  TouchableOpacity ,Switch} from 'react-native'
import HeaderComponent from '../../Components/Header/HeaderComponent';
import styles from './HomeStyles'
import { Colors, Metrics } from '../../Themes';
import ChartComponent from '../../Components/Home/ChartComponent'
import DataComponent from '../../Components/Home/DataComponent'
const data =[
  {
    appointment:"2019/03/13",
    location:"Landspitalinn",
    description:"Irregular blood pressure",
    prescription:"Parkodin Forte 500 mg, 1 tablet in the morning"
  },
  {
    appointment:"2019/03/13",
    location:"Landspitalinn",
    description:"Irregular blood pressure",
    prescription:"Parkodin Forte 500 mg, 1 tablet in the morning"
  },
  {
    appointment:"2019/03/13",
    location:"Landspitalinn",
    description:"Irregular blood pressure",
    prescription:"Parkodin Forte 500 mg, 1 tablet in the morning"
  },
  {
    appointment:"2019/03/13",
    location:"Landspitalinn",
    description:"Irregular blood pressure",
    prescription:"Parkodin Forte 500 mg, 1 tablet in the morning"
  },
]

// Styles
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent
          titleScreen={"Select the data sources"}
          onPress={()=>{}}
        />
        <ScrollView style={{ marginTop: Metrics.sizeHeight * 2 }}>
        <ChartComponent title="Personal Health" chartData={[{title:"Sleep"},{title:"Heart rate"}]}/>
        <ChartComponent title="Environmental data" chartData={[{title:"Noise level"}]}/>
        <DataComponent  title="Hospital History" data ={data}/>
        </ScrollView>
      </View>
    )
  }
}
