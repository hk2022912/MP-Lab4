import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginForm = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/Images/Logo.png')} // Adjusted the path
            style={styles.logo}
          />
        </View>
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.subheading}>Enter your information to Login</Text>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={!isPasswordVisible}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                style={styles.eyeIcon}>
                <Icon
                  name={isPasswordVisible ? 'eye-off' : 'eye'}
                  size={24}
                  color="#aaa"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => setIsChecked(!isChecked)}
              style={styles.checkbox}>
              <Text style={{ color: isChecked ? '#1e90ff' : '#ccc' }}>
                {isChecked ? '✔' : ' '}
              </Text>
            </TouchableOpacity>
            <Text style={styles.label}>Remember me</Text>
            <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>

          </View>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={() => navigation.replace('Dashboard')}> {/* Navigate to Dashboard */}
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('Register')}> {/* Navigate to Register */}
          <Text style={styles.buttonText}>REGISTER HERE</Text>
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
      backgroundColor: '#f0f2f5',
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 10,
    },
    logo: {
      width: 250,
      height: 190,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginBottom: 20,
    },
    subheading: {
      color: '#666',
      textAlign: 'center',
      marginBottom: 20,
      fontSize: 15,
    },
    form: {
      marginBottom: 20,
    },
    inputGroup: {
      marginBottom: 12,
    },
    label: {
      color: '#000',
      marginBottom: 4,
      fontSize: 12,
      fontWeight: 'bold',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 15,
      fontSize: 12,
    },
    eyeIcon: {
      position: 'absolute',
      right: 10,
      marginTop: 10,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: '#ddd',
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    forgotPassword: {
      marginLeft: 'auto',
    },
    forgotPasswordText: {
      color: '#1e90ff',
      fontSize: 10,
    },
    button: {
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
      paddingHorizontal: 100,
    },
    primaryButton: {
      backgroundColor: '#1e90ff',
    },
    secondaryButton: {
      backgroundColor: '#aaa',
      marginTop: 8,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#ddd',
    },
    dividerText: {
      marginHorizontal: 8,
      color: '#666',
    },
  });

export default LoginForm;
