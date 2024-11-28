import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';

const Recover = () => {
  const [email, setEmail] = React.useState('');

  const handleRecover = () => {
    // Simple handler for email recovery
    console.log(`Recovery email sent to: ${email}`);
    alert('Recovery instructions sent to your email.');
  };

  return (
    <View style={recoverStyle.container}>
      <Text style={recoverStyle.title}>Password Recovery</Text>
      <Text style={recoverStyle.subtitle}>
        Enter your registered email to receive recovery instructions.
      </Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        label="Email"
        placeholder="Enter your email"
        style={recoverStyle.textInput}
        mode="outlined"
      />
      <Button
        onPress={handleRecover}
        mode="contained"
        style={recoverStyle.button}
      >
        Send Recovery Email
      </Button>
    </View>
  );
};

export default Recover;

const recoverStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
});
