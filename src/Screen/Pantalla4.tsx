import React, { useState } from 'react'
import BodyComponents from '../Components/BodyComponents'
import Titulo from '../Components/Titulo';
import { Text, View } from 'react-native';
import Calcular from '../Components/Calcular';
import Inputtbotton from '../Components/inputtbotton';
import styles from '../Themes/Apptheme';

const Pantalla4 = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState<null | number | string>(null);
    const handleCalculate = (result: string | number) => {
        setResult(result);
    };
    return (


        <View>
            <BodyComponents>
                <View style={styles.ContentInput}>
                    <Inputtbotton placeholder='Ingrese un Numero' onChange={setValue1} />
                    <Inputtbotton placeholder='Ingrese un Numero' onChange={setValue2} />
                </View>
                <View>
                    <Calcular value1={value1} value2={value2} onCalculate={handleCalculate} />
                    {result !== null && <Text style={styles.resultado}>Resultado: {result}</Text>}
                </View>
            </BodyComponents>
        </View>

    )
}

export default Pantalla4
