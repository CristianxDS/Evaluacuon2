import React from 'react'
import { Button, View } from 'react-native'
import styles from '../Themes/Apptheme';
interface Props {
    value1: string;
    value2: string;
    onCalculate: (result: string | number) => void;

}
const Calcular = ({ value1, value2, onCalculate: Calcular }: Props) => {
    const calculo = () => {
        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);
    
        if (!isNaN(num1) && !isNaN(num2)) {
            if (num1 > num2) {
                Calcular(`${num1} es mayor que ${num2}`);
            } else if (num1 === num2) {
                Calcular(`${num1} es igual a ${num2}`);
            } else {
                Calcular(`${num1} es menor que ${num2}`);
            }
        } else {
            Calcular('Por favor ingrese números válidos');
        }
    };
    return (
        <View style={styles.BotonEnviar}>
        <Button title="COMPARAR" onPress={calculo} />
      </View>
    );
}

export default Calcular
