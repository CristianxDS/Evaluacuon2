import React from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import styles from '../Themes/Apptheme';
import Titulo from '../Components/Titulo';

const Pantalla1 = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={styles.titlePages}>PAGINAS</Text>
            <View  >
                <Button title='Imagen1'
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla2' }))}
                />
                <View>
                    <Button
                        title='Imagen2'
                        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla3' }))}
                    />
                </View>
                <View>

                    <Button
                        title='=>'
                        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla4' }))}
                    />
                </View>
                <View>
                    <Button
                        title='<='
                        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla4' }))}
                    />
                </View>
            </View>

        </View>

    )
}

export default Pantalla1
