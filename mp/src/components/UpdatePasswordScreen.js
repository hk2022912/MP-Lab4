import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const UpdatePasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image source={require('../../assets/Images/Logo.png')} style={styles.logoImage} />
      <Text style={styles.logo}>Forgot Password?</Text>

      <View style={styles.card}>
        <Text style={styles.header}>Update Password</Text>
        <View style={styles.warningContainer}>
          <Text style={styles.warningText}>You need to change your password.</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 250,
    height: 190,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  warningContainer: {
    backgroundColor: '#fffbe6',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffe58f',
    marginBottom: 15,
  },
  warningText: {
    color: '#d48806',
    fontSize: 14,
  },
  input: {
    height: 50,
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
  },
  button: {
    height: 50,
    backgroundColor: '#ff4d4f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UpdatePasswordScreen;
