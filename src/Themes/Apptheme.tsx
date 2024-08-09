import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    ContentBody:{
        backgroundColor:'gray',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:40,
        paddingTop:10,
    },
    imagen:{
        width: 400,
        height: 400,
        resizeMode: 'contain',
marginLeft:25
    } ,
    titlePages:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:40,
    },
    Buttons:{
        borderRadius:30,
    },
    inputText:{
        backgroundColor:'green',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
    },
    TextBoton:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    },
    ContentInput:{
        marginTop:10,
        gap:10,
    
    },
    BotonEnviar:{
        backgroundColor:'red',
        paddingVertical:15,
        borderRadius:25,
        marginTop:30,
    },
    resultado:{
        marginTop:20,
        fontSize:20,
        fontWeight:'bold',
    }
})
export default styles