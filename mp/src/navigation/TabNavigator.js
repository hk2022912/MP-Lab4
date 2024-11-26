import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
  </View>
);

const ProfileScreen = () => (
  <View>
    <Text>Profile Screen</Text>
  </View>
);

const SettingsScreen = ({ navigation }) => (
  <View>
    <Text>Settings Screen</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
  </View>
);

const DetailsScreen = () => (
  <View>
    <Text>Details Screen</Text>
  </View>
);

// Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Main Stack Navigator
const MainStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

// Settings Stack Navigator
const SettingsStack = () => (
  <Stack.Navigator initialRouteName="Settings">
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

// Main App with Tab Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
