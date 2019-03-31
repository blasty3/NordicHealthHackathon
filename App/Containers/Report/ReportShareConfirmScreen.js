import React, { Component } from 'react'
import {
    Text, View, ScrollView,
    TouchableOpacity, Image
} from 'react-native'
import HeaderComponent from '../../Components/Header/HeaderComponent';
import { Colors, Metrics, Images } from '../../Themes';
import styles from './ReportStyles'

import kantaFile from '../../DummyHealthData/ObservationData.json'
import ReportShareFinnishScreen from './ReportShareFinnishScreen'


// Styles
export default class ReportShareConfirmScreen extends Component {

    constructor(){
        super();
        this.state ={
          sent: 0,
          total: 0
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent
                    onPress={() => { }}
                    onBack={true}
                    onGoBack={()=>this.onGoBack()}
                />

                <ScrollView style={{ marginTop: Metrics.sizeHeight * 2 }}>
                    <View style={styles.container}>
                        <Image source={Images.img_health} style={styles.imghealth} />
                        <Text style={styles.textShare}>share to</Text>
                        <TouchableOpacity onPress={()=>this.onConfirm()}>
                            <Text style={styles.textButton}>Confirm</Text>
                        </TouchableOpacity>
                      { this.state.sent == 0 ?
                        null:
                        <Text style={styles.textShare}>Uploading progress {this.state.sent}/{this.state.total} records</Text>
                      }

                    </View>
                </ScrollView>
            </View>
        )
    }

    onGoBack=()=>{
        this.props.navigation.goBack();
    }

    onConfirm=()=>{
      console.log("on confirm", this.state)
      this.setState({total: kantaFile.length})
      console.log("data", kantaFile)

      for (let i = 0; i < kantaFile.length; i++) {
        fetch('http://fhirsandbox.kanta.fi/phr-resourceserver/baseStu3/Observation', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(kantaFile.Observations[i])
        }).then((response) => {
          console.log("response", response)

          this.setState({sent: this.state.sent + 1})
          if (this.state.sent == this.state.total) {
            this.props.navigation.navigate("ReportShareFinnishScreen")
          }
        })
      }
    }
}
