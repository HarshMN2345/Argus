// Login.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Text, Colors, Incubator, Button as UILibButton } from 'react-native-ui-lib';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here  
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} text40>Login</Text>
      <Incubator.TextField
        placeholder="Email"
        onChangeText={setEmail}
        style={styles.input}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Incubator.TextField
        placeholder="Password"
        onChangeText={setPassword}
        style={styles.input}
        value={password}
        secureTextEntry
      />
      <UILibButton
        label="Login"
        onPress={handleLogin}
        style={styles.button}
        backgroundColor={Colors.blue30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.black,
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey40,
    borderRadius: 5,
  },
  button: {
    paddingVertical: 10,
  },
});

export default Login;
