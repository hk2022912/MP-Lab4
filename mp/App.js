import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import MainTabNavigator from './src/navigation/MainTabNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
      <MainTabNavigator />
    </NavigationContainer>
  );
}
