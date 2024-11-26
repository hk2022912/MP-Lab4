import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Dimensions 
} from 'react-native';
import { Home, UserCircle, Settings, Menu, X } from 'lucide-react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

// Constants
const { width } = Dimensions.get('window');

// Navigation Data
const NAV_ITEMS = [
  { id: 'Home', label: 'Home', icon: Home },
  { id: 'Profile', label: 'Profile', icon: UserCircle },
  { id: 'Settings', label: 'Settings', icon: Settings },
];

const Dashboard = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  // Animated sidebar style
  const animatedSidebarStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(isMenuOpen ? 0 : -width, { duration: 300 }),
      },
    ],
  }));

  // Render discover images (placeholder for your discover section)
  const renderDiscoverImages = () => {
    const images = [
      require('../../assets/Images/Logo.png'),
      require('../../assets/Images/Logo.png'),
      require('../../assets/Images/Logo.png'),
      require('../../assets/Images/Logo.png')
    ];
  
    return (
      <View style={styles.discoverContainer}>
        {images.map((image, index) => (
          <View key={index} style={styles.discoverImagePlaceholder}>
            <Image source={image} style={styles.discoverImage} />
          </View>
        ))}
      </View>
    );
  };

  // Render the side menu
  const renderSideMenu = () => (
    <Animated.View style={[styles.sideMenu, animatedSidebarStyle]}>
      {/* Logo at the top */}
      <Image
        source={require('../../assets/Images/Logo.png')} // Ensure the path is correct
        style={styles.sideMenuLogo}
      />

      {/* Close Menu Button */}
      <TouchableOpacity
        style={styles.closeMenuButton}
        onPress={() => setIsMenuOpen(false)}
      >
        <X color="black" size={24} />
      </TouchableOpacity>

      {/* Navigation Items */}
      {NAV_ITEMS.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.sideMenuItem}
          onPress={() => {
            setActiveTab(item.id);
            setIsMenuOpen(false);
            navigation.navigate(item.id); // Navigate using the correct screen ID
          }}
        >
          <item.icon color="black" size={24} />
          <Text style={styles.sideMenuItemText}>{item.label}</Text>
        </TouchableOpacity>
      ))}

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')} // Navigate to Login Page
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  // Render bottom navigation
  const renderBottomNavigation = () => (
    <View style={styles.bottomNavigation}>
      {NAV_ITEMS.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.navItem}
          onPress={() => {
            setActiveTab(item.id);
            navigation.navigate(item.id); // Navigate using the correct screen ID
          }}
        >
          <item.icon
            color={activeTab === item.id ? '#007bff' : 'gray'}
            size={24}
          />
          <Text
            style={[styles.navItemText, activeTab === item.id && styles.activeNavItemText]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Hamburger Menu Toggle */}
      <TouchableOpacity
        style={styles.menuToggle}
        onPress={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu color="black" size={24} />
      </TouchableOpacity>

      {/* Side Menu */}
      {renderSideMenu()}

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>EXPLORE</Text>

        <Text style={styles.sectionTitle}>Discover & News</Text>

        <View style={styles.discoverContainer}>{renderDiscoverImages()}</View>

        <Text style={styles.sectionTitle}>Why Bikers Hub?</Text>
        <Text style={styles.description}>
          BikersHub connects bike enthusiasts with affordable rental options,
          making cycling accessible to everyone.
        </Text>
      </ScrollView>

      {/* Bottom Navigation */}
      {renderBottomNavigation()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  menuToggle: {
    position: 'absolute',
    top: 50,
    left: 15,
    zIndex: 1000,
  },
  content: {
    flexGrow: 1,
    paddingTop: 100,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  discoverContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  discoverImagePlaceholder: {
    width: '48%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden', // Ensures the image stays within the container bounds
  },
  discoverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the image fills the container properly
  },
  description: {
    color: '#666',
    lineHeight: 22,
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.75,
    height: '100%',
    backgroundColor: 'white',
    zIndex: 1000,
    padding: 20,
    paddingTop: 80,
  },
  sideMenuLogo: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  closeMenuButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  sideMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  sideMenuItemText: {
    marginLeft: 15,
    fontSize: 18,
  },
  logoutButton: {
    padding: 15,
    backgroundColor: '#ff4d4d',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 160,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  navItemText: {
    marginTop: 5,
    fontSize: 12,
    color: 'gray',
  },
  activeNavItemText: {
    color: '#007bff',
  },
});

export default Dashboard;
