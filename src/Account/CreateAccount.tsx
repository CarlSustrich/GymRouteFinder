import React, { useState } from 'react';
import { TextInput, Button, Text, View, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      console.log('User created successfully!', userCredential.user);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <>
      <View style={styles.body}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />
        <Button title="Sign up" onPress={handleSignUp} />
      </View>
      {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: "#808080",
    color: '#808080',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '70%'
  },
  button: {
    backgroundColor: '#808080',
  }
 
})

export default SignUp;
