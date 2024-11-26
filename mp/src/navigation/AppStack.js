import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../components/LoginForm'; // Adjust path
import Dashboard from '../components/Dashboard'; // Adjust path
import SignUpForm from '../components/SignUpForm'; // Adjust path
import UpdatePasswordScreen from '../components/UpdatePasswordScreen'; // Adjust path
import DrawerNavigator from './DrawerNavigator'; // Import Drawer Navigator
import ProfileScreen from '../components/ProfileScreen';





const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={SignUpForm}
        options={{ headerShown: true, title: 'Register' }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={UpdatePasswordScreen}
        options={{ headerShown: true, title: 'Forgot Password' }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Main" 
        component={DrawerNavigator} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}
