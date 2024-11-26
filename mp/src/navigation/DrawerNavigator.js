import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'; // Import Tab Navigator
import ProfileScreen from '../screens/ProfileScreen'; // Import Profile Screen

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator 
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false, // Hide header for drawer items
      }}
    >
      <Drawer.Screen 
        name="Dashboard" 
        component={TabNavigator} 
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} 
      />
    </Drawer.Navigator>
  );
}
