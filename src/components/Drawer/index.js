import { View, Image, Text, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function DrawerContent(props) {
  const router = useRouter();
  const year = new Date().getFullYear();

  const handleLogout = async () => {
    router.replace('/');
  };

  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={true}
        contentContainerStyle={{ paddingTop: top }}
      >
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/userImage.jpg')}
            style={styles.profileImage}
          />
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          )}
          labelStyle={styles.drawerLabel}
          onPress={handleLogout}
        />
      </DrawerContentScrollView>
      <View style={[styles.footer, { paddingBottom: bottom }]}>
        <Text style={styles.footerText}>
          Copyright &copy; {year}. All rights reserved
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF8EF', // Set background color
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    height: 120, // Adjusted height for better sizing
    width: 120, // Adjusted width for better sizing
    borderRadius: 60, // Ensure circular shape
    borderWidth: 2,
    borderColor: '#ccc', // Add a subtle border for style
  },
  drawerLabel: {
    marginLeft: 10,
    fontSize: 16, // Adjust font size for better readability
    fontWeight: '500', // Add a medium weight for emphasis
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#555', // Use a muted color for the footer text
  },
});
