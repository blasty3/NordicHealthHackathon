import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, FlatList } from 'react-native'
import { Metrics, Images, Colors } from '../../Themes'

// Styles
export default class DataComponent extends Component {
    render() {

        let { data, title } = this.props

        return (
            <View>
                <Text style={styles.textTitleContent}>{title}</Text>
                <View style={styles.colContainer}>
                    <View style={[styles.col,{ borderRightWidth: Metrics.sizeWidth * 0.1 }]}>
                        <Text style={styles.textCol}>Appointment date</Text>
                    </View>
                    <View style={[styles.col,{ borderRightWidth: Metrics.sizeWidth * 0.1 }]}>
                        <Text style={styles.textCol}>Location</Text>
                    </View>
                    <View style={[styles.col,{ borderRightWidth: Metrics.sizeWidth * 0.1 }]}>
                        <Text style={styles.textCol}>Description</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.textCol}>Prescription</Text>
                    </View>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => this.renderItemContent(item)}
                />
            </View>
        )
    } Î

    renderItemContent = (item) => {
        return (
            <View style={styles.colContainer}>
                    <View style={[styles.col,{ borderWidth:0,borderRightWidth: Metrics.sizeWidth * 0.1 }]}>
                        <Text style={[styles.textCol,{color:Colors.grey1}]}>{item.appointment}</Text>
                    </View>
                    <View style={[styles.col,{ borderWidth:0,borderRightWidth: Metrics.sizeWidth * 0.1 }]}>
                        <Text style={[styles.textCol,{color:Colors.grey1}]}>{item.location}</Text>
                    </View>
                    <View style={[styles.col,{ borderWidth:0,borderRightWidth: Metrics.sizeWidth * 0.1 }]}>
                        <Text style={[styles.textCol,{color:Colors.grey1}]}>{item.description}</Text>
                    </View>
                    <View style={[styles.col,{borderWidth:0}]}>
                        <Text style={[styles.textCol,{color:Colors.grey1}]}>{item.prescription}</Text>
                    </View>
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
        width: width * 90,
        height: height * 12,
        // alignSelf:"center",
        resizeMode: "stretch"
    },

    textSt: {
        color: Colors.red1,
        fontWeight: "100",
        marginLeft: width * 4.5,
        marginBottom: width
    },
    itemStContainer: {
        padding: width * 3
    },
    col: {
        // borderWidth: width * 0.3,
        borderTopWidth: width * 0.1,
        borderBottomWidth: width * 0.1,
        borderColor: Colors.grey,
        alignItems: "center",
        justifyContent: "center",
        width: width * 25,
        height: height * 10
    },
    textCol: {
        color: Colors.red1,
        // padding: width * 4,
        textAlign: "center",
        fontSize:width * 3
    },
    colContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})