import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import MyButton from '../components/MyButton';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={regStyle.container}>
      <View style={regStyle.headerSection}>
        <Image source={require('../assets/logo.png')} style={regStyle.logo} />
        <Text style={regStyle.title}>Create Your Account</Text>
      </View>
      
      <View style={regStyle.inputSection}>
        <TextInput
          label="Username"
          placeholder="Enter your username"
          style={regStyle.textInput}
          mode="outlined"
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          style={regStyle.textInput}
          mode="outlined"
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          style={regStyle.textInput}
          secureTextEntry
          mode="outlined"
        />
        <TextInput
          label="Confirm Password"
          placeholder="Confirm your password"
          style={regStyle.textInput}
          secureTextEntry
          mode="outlined"
        />
      </View>
      
      <View style={regStyle.buttonSection}>
        <View style={regStyle.button}>
          <MyButton
            text="Register"
            action={() => console.log('Register')}
            mode="contained"
            size="small"  
            color="#1f7a8c" 
          />
        </View>  
        <View style={regStyle.button}>
          <MyButton
            text="Login"
            action={() => router.back()}
            mode="outlined"
            size="small"  
            color="#1f7a8c"  
          />
        </View>  
      </View>
    </SafeAreaView>
  );
};

export default Register;

const regStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 3,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  inputSection: {
    width: '85%',
    marginBottom: 30,
  },
  textInput: {
    marginVertical: 5,
    backgroundColor: '#fff', 
  },
  buttonSection: {
    width: '85%',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: '100%',
    marginVertical: 10, 
  },
});