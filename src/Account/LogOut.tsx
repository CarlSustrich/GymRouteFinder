import React from 'react';
import { Button, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const LogOut = () => {
  const handleLogout = async () => {
    try {
      await auth().signOut();
      console.log('User logged out successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
};

export default LogOut;
