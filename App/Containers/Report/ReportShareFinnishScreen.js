import React, { Component } from 'react'
import {
    Text, View, ScrollView,
    TouchableOpacity, Image
} from 'react-native'
import HeaderComponent from '../../Components/Header/HeaderComponent';
import { Colors, Metrics, Images } from '../../Themes';
import styles from './ReportStyles'

// Styles
export default class ReportShareFinnishScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent
                    onPress={() => { }}
                    onBack={true}
                    onGoBack={()=>this.props.navigation.goBack()}
                />

                <ScrollView style={{ marginTop: Metrics.sizeHeight * 2 }}>
                    <View style={styles.container}>
                        <Image source={Images.icon_message_success} style={styles.imgSuccess} />
                        <Text style={{color:Colors.red1,marginTop:Metrics.sizeHeight * 3,marginBottom:Metrics.sizeHeight *3,fontWeight:"500"}}>Thank you!</Text>
                        <Text style={{color:Colors.grey3,width:Metrics.sizeWidth * 40,textAlign:"center"}}>Dr. E Tukio has received your Health Data Report and will get back to you as soon as possible.</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
