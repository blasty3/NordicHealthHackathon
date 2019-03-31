import React, { Component } from 'react'
import {
    Text, View, ScrollView, FlatList,
    TouchableOpacity, Switch
} from 'react-native'
import HeaderComponent from '../../Components/Header/HeaderComponent';
import styles from '../Home/HomeStyles';
import { Colors, Metrics } from '../../Themes';
import ChartComponent from '../../Components/Home/ChartComponent';

// Styles
export default class ReportHealthData extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent
                    titleScreen={"Health DATA Report"}
                    onPress={() => { }}
                    onBack={true}
                />
                <ScrollView style={{ marginTop: Metrics.sizeHeight * 2 }}>
                    <ChartComponent title="Personal Health" chartData={[{ title: "Sleep" }, { title: "Heart rate" }]} />
                    <ChartComponent title="Environmental data" chartData={[{ title: "Noise level" }]} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            // this.props.navigation.navigate("RegisterScreen")
                        }}>
                            <Text style={styles.textButton}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
