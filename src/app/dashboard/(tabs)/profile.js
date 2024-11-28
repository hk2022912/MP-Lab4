import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/userImage.jpg')} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>Hazel Butlay</Text>
        <Text style={styles.bio}>React Native Developer</Text>
      </View>

      {/* Profile Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>1</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>300</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FBF8EF', 
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 220,
    height: 220,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#1f7a8c',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  bio: {
    fontSize: 14,
    color: '#4a4a4a',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginBottom: 30,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  statLabel: {
    fontSize: 14,
    color: '#4a4a4a',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#1f7a8c',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 10,
  },
  actionButtonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#ffffff', 
    borderWidth: 1,
    borderColor: '#1f7a8c',
  },
  secondaryButtonText: {
    color: '#1f7a8c',
  },
});
