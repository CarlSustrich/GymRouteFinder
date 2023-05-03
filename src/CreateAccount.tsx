import React, { useState } from 'react';
import { TextInput, Button, Text, View } from 'react-native';
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
      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        />
        <Button title="Sign up" onPress={handleSignUp} />
      </View>
      {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}
    </>
  );
};

export default SignUp;
