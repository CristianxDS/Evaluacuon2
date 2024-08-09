import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import styles from '../Themes/Apptheme'
interface Props{
    placeholder:string,
    onChange:(text:string)=>void,
}
const Inputtbotton = ({placeholder,onChange}:Props) => {
  return (
    <TextInput
    placeholder= {placeholder}
    keyboardType= 'numeric'
    style={styles.inputText}
    onChangeText={onChange}
    />
  )
}

export default Inputtbotton
