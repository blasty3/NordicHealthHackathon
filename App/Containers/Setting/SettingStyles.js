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
        paddingTop:width *3,
        paddingBottom:width *3
    },
    textButton: {
        color: Colors.red1,
        padding: width * 7,
        paddingTop: width * 2,
        paddingBottom: width * 2,
    },

    button: {
        overflow: 'hidden',
        borderColor: Colors.red1,
        borderWidth: width * 0.3,
        backgroundColor:"white"
    }
})