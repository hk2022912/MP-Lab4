import React, { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleRegister = () => {
    console.log('User registered:', { username, password, email });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../../assets/Images/Logo.png')} style={styles.logoImage} /> 
        <Text style={styles.logo}>Create an Account</Text>
        <Text style={styles.header}>Register to Proceed the App</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon
              name={passwordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#aaa"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm password"
            placeholderTextColor="#aaa"
            secureTextEntry={!confirmPasswordVisible}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
            <Icon
              name={confirmPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#aaa"
            />
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
            color="#1e90ff"
          />
          <Text style={styles.checkboxLabel}>I agree to the Terms and Conditions</Text>
        </View>

        <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',  // Updated background color for contrast
  },
  card: {
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },
  logoImage: {
    width: 250, 
    height: 190,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  header: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    color: '#333333',
    marginBottom: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 23,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    color: '#333333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  checkboxLabel: {
    color: '#333333',
    marginLeft: 8,
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  registerButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  backToLogin: {
    color: '#1e90ff',
  },
});

export default SignUpForm;
