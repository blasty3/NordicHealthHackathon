import React, { Component } from 'react'
import {
    Text, View, ScrollView,
    TouchableOpacity, Image
} from 'react-native'
import HeaderComponent from '../../Components/Header/HeaderComponent';
import { Colors, Metrics, Images } from '../../Themes';
import styles from './ReportStyles'

// Styles
export default class ReportHealthDataScreen extends Component {

    constructor(){
        super();
        this.state ={
            content1:"Doctor",
            content2:"EHR",
            content3:"Caretaker"
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
                        <TouchableOpacity onPress={()=> {}}>
                            <Text style={styles.textButton}>{this.state.content1}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onShare(2)}>
                            <Text style={styles.textButton}>{this.state.content2}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> {}}>
                            <Text style={styles.textButton}>{this.state.content3}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }

    onGoBack=()=>{
      this.props.navigation.goBack();
    }

    onShare=()=>{
      this.props.navigation.navigate("ReportShareConfirmScreen");
    }
}
