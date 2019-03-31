import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'
import { View } from 'react-native-animatable';

const width = Metrics.sizeWidth
const height = Metrics.sizeHeight
export default styles = StyleSheet.create({
    itemStContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: Metrics.sizeWidth * 3,
        paddingBottom: Metrics.sizeWidth * 3,
        // borderBottomWidth: 1,
        // borderColor: Colors.grey5,
        paddingLeft: Metrics.sizeWidth * 5,
        paddingRight: Metrics.sizeWidth * 5,
    },

    textSt: {
        color: Colors.red1,
        fontWeight: "500",
        textAlign: "center",
    },

    iconSt: {
        color: Colors.main,
        height: Metrics.sizeWidth * 5,
        width: Metrics.sizeWidth * 2,
        resizeMode: "stretch"
    },

    textTitleContent: {
        color: 'white',
        fontWeight: "500",
        textAlign: "center",
        backgroundColor: Colors.red1,
        paddingTop: height * 2,
        paddingBottom: height * 2,
    },
    buttonContainer: {
        alignItems: "center",
        backgroundColor: Colors.grey6,
        justifyContent: "center",
        // height:height*6,
        paddingTop: height * 3,
        paddingBottom: height * 3,
        marginTop: height * 6
    },
    // textButton: {
    //     color: Colors.red1,
    //     padding: width * 7,
    //     paddingTop: width * 2,
    //     paddingBottom: width * 2,
    // },

    button: {
        overflow: 'hidden',
        borderColor: Colors.red1,
        borderWidth: width * 0.3,
        backgroundColor: "white"
    },

    textButton: {
        overflow: 'hidden',
        borderColor: Colors.red1,
        borderWidth: width * 0.1,
        backgroundColor: "white",
        padding: width * 2.5,
        width: width * 40,
        color:Colors.red1,
        textAlign:"center",
        marginTop:height*2
    },

    textShare: {
        color: Colors.grey4,
        marginTop:height*4,
        marginBottom:height*2
    },

    imghealth: {
        height: height * 25,
        width: width * 32,
        resizeMode: "stretch"
    },

    text: {
        textAlign: "center",
        color: Colors.grey4,
        width: width * 30
    },
    textReport: {
        backgroundColor: Colors.red1,
        width: width * 50,
        textAlign: "center",
        color: "white",
        paddingTop: width * 3,
        paddingBottom: width * 3
    },
    downContainer: {
        width: width * 50,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: width * 0.1,
        borderColor: Colors.grey4,
        flexDirection: "row",
        paddingTop: width * 3,
        paddingBottom: width * 3
    },
    iconDown: {
        height: height * 1.1,
        width: width * 4,
        resizeMode: "stretch",
        marginLeft: width * 3
    },
    textDown: {
        color: Colors.red1
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginTop:height*7
    },
    imgSuccess:{
        width:width * 45,
        height:height*22,
        resizeMode: "stretch",
    }
})