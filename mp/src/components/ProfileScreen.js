import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icon library

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="notifications" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <Image
          source={require('../../assets/Images/userImage.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Hazel Butlay</Text>
        <Text style={styles.jobTitle}>React Native Developer</Text>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>30</Text>
            <Text style={styles.statLabel}>Apps Deployed</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>20</Text>
            <Text style={styles.statLabel}>Clients Satisfied</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>10</Text>
            <Text style={styles.statLabel}>Experience Years</Text>
          </View>
        </View>

        <Text style={styles.version}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 60,
  },
  iconButton: {
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3478f6',
    textAlign: 'center',
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginVertical: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  jobTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
    marginTop: 25,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3478f6',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  version: {
    fontSize: 14,
    color: '#999',
    marginTop: 50,
    marginBottom: 30,
  },
});
