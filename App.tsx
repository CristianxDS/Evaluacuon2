import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavegator from './src/Navegator/StackNavegator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavegator/>
    </NavigationContainer>


  )
}

export default App

