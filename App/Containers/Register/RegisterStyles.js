import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'
import { View } from 'react-native-animatable';

const width = Metrics.sizeWidth
const height = Metrics.sizeHeight
export default styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:Metrics.sizeHeight * 10
    },

    logo:{
        width:width*50,
        height:width*50
    },

    input:{
      minWidth:width *70  ,
      paddingTop:width *5,
      paddingBottom:width *5,
      borderColor:Colors.red1,
      borderBottomWidth:width * 0.3
    },

    containerAction:{
        justifyContent:"center",
        flexDirection:"row"
    },
    textButton:{
        color:Colors.red1,
        padding:width * 9,
        paddingTop:width * 3,
        paddingBottom:width * 3,
    },

    buttonContainer:{
        overflow:'hidden',
        borderColor:Colors.red1,
        borderWidth:width*0.3,
        margin:width *3,
        marginTop:width *18
    }
})