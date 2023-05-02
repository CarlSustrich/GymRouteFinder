import { 
  View,
  Text, 
  StyleSheet,
  Button,
  TextInput
 } from "react-native";
import {useNavigation, useRoute} from '@react-navigation/native';
import { useState } from "react";
import firestore from '@react-native-firebase/firestore';

import type { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Login: { userId: string };
};

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

function LogIn({navigation}):JSX.Element {

  const [createToggle, setCreate] = useState(false);
  
  const onClick = () => {
    navigation.replace("Home", {names: "fish"});
  }
  return(
    <View style={styles.body}>
      <Text> Log In To Your Account</Text>
      <Text>UserName: </Text><TextInput></TextInput>
      <Text>Password: </Text><TextInput></TextInput>
      <Button title='Continue as Guest' onPress={onClick}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default LogIn
