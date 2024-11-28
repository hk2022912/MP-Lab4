import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DrawerLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer drawerContent={DrawerContent}>
            <Drawer.Screen
                name="(tabs)" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Home',
                    title: 'Home',
                    drawerIcon: ({ focused}) => <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={20} />,
                }}
            />
            <Drawer.Screen
                name="settings" 
                options={{
                    drawerLabel: 'Settings',
                    title: 'Settings',
                    drawerIcon: ({ focused }) => <MaterialCommunityIcons name={focused ? 'cog' : 'cog-outline' } size={20} />,
                }}
            />
            <Drawer.Screen
                name="profile" 
                options={{
                    drawerLabel: 'Profile',
                    title: 'Profile',
                    drawerIcon: ({ focused }) => <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} size={20} />,
                }}
            />
        </Drawer>
    </GestureHandlerRootView>
  );

}
