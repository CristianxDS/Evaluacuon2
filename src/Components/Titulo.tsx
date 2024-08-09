import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
interface Props {
    title: string
}
const Titulo = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Text style={{ height: height * 0.10 }}>{title}</Text>
    )
}

export default Titulo
