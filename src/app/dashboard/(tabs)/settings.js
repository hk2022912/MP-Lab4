import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const Settings = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.header, themeStyles.text]}>Settings</Text>

        <View style={[styles.card, themeStyles.card]}>
          <Text style={[styles.cardTitle, themeStyles.text]}>Account</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={[styles.optionText, themeStyles.text]}>
              Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={[styles.optionText, themeStyles.text]}>
              Change Password
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.card, themeStyles.card]}>
          <Text style={[styles.cardTitle, themeStyles.text]}>Preferences</Text>
          <View style={styles.option}>
            <Text style={[styles.optionText, themeStyles.text]}>Dark Mode</Text>
            <Switch
              value={isDarkMode}
              onValueChange={(value) => setIsDarkMode(value)}
            />
          </View>
          <View style={styles.option}>
            <Text style={[styles.optionText, themeStyles.text]}>
              Enable Notifications
            </Text>
            <Switch
              value={true}
              onValueChange={() => {}}
            />
          </View>
        </View>

        <View style={[styles.card, themeStyles.card]}>
          <Text style={[styles.cardTitle, themeStyles.text]}>Support</Text>
          <TouchableOpacity style={styles.option}>
            <Text style={[styles.optionText, themeStyles.text]}>
              Help Center
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={[styles.optionText, themeStyles.text]}>About</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.logoutButton, themeStyles.logoutButton]}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
  },
  logoutButton: {
    alignSelf: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
  },
  text: {
    color: '#333',
  },
  card: {
    backgroundColor: '#FFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  logoutButton: {
    backgroundColor: '#E63946',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
  },
  text: {
    color: '#E0E0E0',
  },
  card: {
    backgroundColor: '#2C2C2C',
    borderColor: '#444',
    borderWidth: 1,
  },
  logoutButton: {
    backgroundColor: '#D62839',
  },
});
