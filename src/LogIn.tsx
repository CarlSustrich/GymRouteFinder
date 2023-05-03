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
import auth from '@react-native-firebase/auth'

import type { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Login: { userId: string };
};

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

// const LogIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       setError('Please enter both email and password');
//       return;
//     }

//     try {
//       const userCredential = await auth().signInWithEmailAndPassword(email, password);
//       console.log('User logged in successfully!', userCredential.user);
//     } catch (error) {
//       setError(error.message);
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <View>
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={(text) => setEmail(text)}
//           style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
//           autoCapitalize="none"
//         />
//         <TextInput
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//           style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
//         />
//         <Button title="Log in" onPress={handleLogin} />
//       </View>
//       {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}
//     </>
//   );
// };

// export default LogIn;

function LogIn({}):JSX.Element {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }
    try {
      const userCredential = await auth().signInWithEmailAndPassword (email, password);
      console.log('user logged in succesfully', userCredential.user)
    } catch (error) {
      setError(error.message)
      console.log(error);
    }
  };



  
  // const onClick = () => {
  //   navigation.replace("Home", {names: "fish"});
  // }
  return(
    <View style={styles.body}>
      <Text> Log In To Your Account</Text>
      <Text>UserName: </Text>
      <TextInput 
        style={styles.input}
        placeholder="example@gmail.com"
        value={email}
        onChangeText={(text) => (setEmail(text))}/>
      <Text>Password: </Text>
      <TextInput 
        style={styles.input} 
        secureTextEntry={true}
        placeholder="******"
        value={password}
        onChangeText={(text) => (setPassword(text))}/>
      <Button title='Log In' onPress={handleLogin}></Button>
      {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}
    </View>
  )
}

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

export default LogIn
