import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button } from 'react-native-paper';
import MyButton from '../components/MyButton';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  return (
    <SafeAreaView style={loginStyle.container}>
      <View style={loginStyle.logoSection}>
        <Image source={require('../assets/logo.png')} style={loginStyle.logo} />
        <Text style={loginStyle.title}>Bikers Hub</Text>
        <Text style={loginStyle.subtitle}>Enter your information to Login</Text>
      </View>

      <View style={loginStyle.inputSection}>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          label="Email"
          placeholder="Enter your email"
          style={loginStyle.textInput}
          mode="outlined"
          theme={{ colors: { primary: '#1f7a8c' } }}
        />
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          label="Password"
          placeholder="Enter your password"
          style={loginStyle.textInput}
          secureTextEntry={!isShowPassword}
          mode="outlined"
          theme={{ colors: { primary: '#1f7a8c' } }}
          right={<TextInput.Icon onPress={() => setIsShowPassword(!isShowPassword)} icon={isShowPassword ? 'eye' : 'eye-off'} />}
        />
      </View>

      <View style={loginStyle.buttonSection}>
        <View style={loginStyle.button}>
          <MyButton
            text="Login"
            action={() => router.replace('dashboard')}
            mode="contained"
            size="small"
            color="#1f7a8c"
          />
        </View>
        <View style={loginStyle.button}>
          <MyButton
            text="Register"
            action={() => router.push('register')}
            mode="outlined"
            size="small"
            color="#1f7a8c"
          />
        </View>
        <Button
          onPress={() => router.push('recover')}
          mode="text"
          style={loginStyle.forgotPassword}
          labelStyle={{ color: '#1f7a8c' }}
        >
          Forgot Password?
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSection: {
    alignItems: 'center',
    marginVertical: 30,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 20,
  },
  inputSection: {
    width: '85%',
    marginTop: 5,
  },
  textInput: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonSection: {
    width: '85%',
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    width: '100%',
  },
  forgotPassword: {
    marginTop: 20,
  },
});
