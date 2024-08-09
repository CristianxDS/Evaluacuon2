import { createStackNavigator } from '@react-navigation/stack';
import Pantalla1 from '../Screen/Pantalla1';
import Pantalla2 from '../Screen/Pantalla2';
import Pantalla3 from '../Screen/Pantalla3';
import Pantalla4 from '../Screen/Pantalla4';


const Stack = createStackNavigator();
const StackNavegator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown:false,}} name="Home" component={Pantalla1} />
            <Stack.Screen name="Pantalla2" component={Pantalla2} />
            <Stack.Screen name="Pantalla3" component={Pantalla3} />
            <Stack.Screen name="Pantalla4" component={Pantalla4} />
        </Stack.Navigator>
    );
}
export default StackNavegator