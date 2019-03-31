import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import HeaderComponent from '../../Components/Header/HeaderComponent';
import { Metrics } from '../../Themes';
import ChartComponent from '../../Components/Home/ChartComponent'
import DataComponent from '../../Components/Home/DataComponent'
import { connect } from 'react-redux'
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
class HomeScreen extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent
          titleScreen={"HEALTH DATA"}
          onPress={()=> {}}
        />
        <ScrollView style={{ marginTop: Metrics.sizeHeight * 2 }}>
        <ChartComponent title="Personal Health" chartData={[{title:"Sleep"},{title:"Heart rate"}]}/>
        <ChartComponent title="Environmental data" chartData={[{title:"Noise level"}]}/>
        <DataComponent  title="Hospital History" data ={data}/>
        </ScrollView>
      </View>
    )
  }

  gotoSettingScreen = (screen) => {
    this.props.navigation.navigate(screen)
  }

  componentDidMount () {
    this.checkSetting(this.props)
  }

  componentWillReceiveProps(newProps) {
    this.checkSetting(newProps)
  }

  checkSetting (props) {
    console.log("home props", props)

    if (props.dataSource == null) {
      this.gotoSettingScreen("DataSourceScreen")
    }
  }
}

const mapStateToProps = (state) => {
  const { dataSource, dataView } = state.setting
  return {
    dataSource, dataView
  }
}

export default connect(mapStateToProps, null)(HomeScreen)
