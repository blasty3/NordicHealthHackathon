import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList,
  TouchableOpacity ,Switch} from 'react-native'
import HeaderComponent from '../../Components/Header/HeaderComponent';
import styles from './SettingStyles'
import { Colors, Metrics } from '../../Themes';
import { connect } from 'react-redux'
import SettingActions from '../../Redux/SettingRedux';
import initData from '../../App/initData'


// Styles
class DataViewScreen extends Component {
  constructor() {
    super()
    this.state = {
      personal: initData.PersonalDataView,
      environment: initData.EnvironmentalDataView,
      hospital: initData.HospitalDataView
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent
          titleScreen={"Data Views Settings"}
          onPress={()=> {}}
        />
        <ScrollView style={{ marginTop: Metrics.sizeHeight * 2 }}>

          {this.renderContent("Personal Health", this.state.personal, 'personal')}
          {this.renderContent("Environmental data", this.state.environment, 'environment')}
          {this.renderContent("Hospital data", this.state.hospital, 'hospital')}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.saveSetting()}>
              <Text style={styles.textButton}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }

  renderContent = (title, data, type) => {
    return (
      <View>
        <Text style={styles.textTitleContent}>{title}</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => this.renderItemContent(item, type)}
        />
      </View>
    )
  }

  renderItemContent = (item, type) => {
    return (
      <View style={styles.itemStContainer}>
        <Text style={styles.textSt}>{item.text}</Text>
        <Switch
          thumbColor={"white"}
          trackColor={Colors.grey6}
          ios_backgroundColor={Colors.grey6}
          onTintColor={Colors.red1}
          onValueChange = {(value) => this.toggleSwitch(item.id, value, type)}
          style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
          value={item.value}
        />
      </View>
    )
  }
  componentWillReceiveProps(newProps) {
    this.setState(newProps.dataSource)
  }

  saveSetting () {
    this.props.setDataView(this.state)
    this.props.navigation.goBack()
  }

  toggleSwitch (id, value, type) {
    switch (type) {
      case 'personal':
        let personal = [];

        for (let it of this.state.personal) {
          if (it.id === id) {
            it.value = value;
          }
          personal.push(it)
        }

        this.setState({personal:personal})
        break;
      case 'environment':
        let environment = [];

        for (let it of this.state.environment) {
          if (it.id === id) {
            it.value = value;
          }
          environment.push(it)
        }

        this.setState({environment:environment})
        break;
      case 'hospital':
        let hospital = [];

        for (let it of this.state.hospital) {
          if (it.id === id) {
            it.value = value;
          }
          hospital.push(it)
        }

        this.setState({hospital:hospital})
        break;
    }
  }
}

const mapStateToProps = (state) => {
  const { dataSource } = state.setting
  return {
    dataSource
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDataSource: (params) => dispatch(SettingActions.setDataSource(params)),
  setDataView: (params) => dispatch(SettingActions.setDataView(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(DataViewScreen)
