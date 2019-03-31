import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Metrics, Images, Colors } from '../../Themes'

// Styles
export default class HeaderComponent extends Component {
    render() {
        let { titleScreen, onBack, onPress } = this.props
        return (
            <View>
                <View style={styles.container}>
                    <View>{
                        onBack ?
                            <TouchableOpacity onPress ={()=>this.props.onGoBack()}>
                                <Image source={Images.icon_arrow} style={styles.logoBack} />
                            </TouchableOpacity>
                            : null
                    }
                    </View>
                    <View style={styles.iconTitle}>
                        <Image source={Images.icon_title} style={styles.logo} />
                        <Text style={styles.titleHeader}> CARE</Text>
                    </View>
                </View>
                {titleScreen ?
                    <TouchableOpacity onPress={() => onPress()}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.titleScreen}>{titleScreen.toUpperCase()}</Text>
                            <Text style={{}}></Text>
                        </View>
                    </TouchableOpacity> : null
                }
            </View>
        )
    }
}


const width = Metrics.sizeWidth
const height = Metrics.sizeHeight
const styles = StyleSheet.create({
    container: {
        height: height * 7,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.grey6,
        width: "100%",
        alignItems: "center",
        paddingRight: width * 3.

    },
    logo: {
        height: height * 4,
        width: width * 28,
        resizeMode: "stretch"
    },
    titleHeader: {
        color: Colors.red1,
        marginTop: width * 1,
        fontSize: width * 4.2,
        fontWeight: "500"
    },
    titleScreen: {
        color: 'white',
        backgroundColor: Colors.red1,
        padding: width * 5,
        paddingTop: width * 2,
        paddingBottom: width * 2,
        fontWeight: "500"
    },
    logoBack: {
        height: height * 1.8,
        width: width * 6,
        resizeMode: "stretch",
        marginLeft: width * 3
    },
    iconTitle: {
        flexDirection: "row",
        alignItems: "center",
    }
})