import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../Themes/Apptheme';
interface Props{
    textboton:string
}
const ButoonNumeros = ({textboton}:Props) => {
  return (
   <View>
    <TouchableOpacity>
        <Text style={styles.TextBoton}>{textboton}</Text>
    </TouchableOpacity>
   </View>
  )
}

export default ButoonNumeros
