import { GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-google-signin/google-signin';
import { Button } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';

function GoogleSignIn() {
 
  // GoogleSignin.configure({
  //   webClientId: "457872004929-ju6bu2j6iss4pqb0f1qh8oolo3ab67nf.apps.googleusercontent.com",
  //   offlineAccess: false
  // });

  const firebaseAuth = auth();
  // const signInRequest = firebase.auth().GoogleAuthProvider.credential({
  //   googleIdTokenRequestOptions: {
  //     serverClientId: '457872004929-ju6bu2j6iss4pqb0f1qh8oolo3ab67nf.apps.googleusercontent.com',
  //     filterByAuthorizedAccounts: true,
  //   },
  // });

  async function onGoogleButtonPress() {
    // get the user's Google account credentials
    const { idToken, accessToken } = await GoogleSignin.signIn();
  
    // create a Firebase credential object from the Google ID token
    const credential = auth.GoogleAuthProvider.credential(idToken);
  
    // sign in to Firebase with the Google credential
    await firebaseAuth.signInWithCredential(credential);
  }

  // async function signInSilently() {
  //   try {
  //     await GoogleSignin.signInSilently();
  //     const { idToken } = await GoogleSignin.getTokens();
  //     const credential = firebase.auth.GoogleAuthProvider.credential(idToken);
  //     const { user } = await firebase.auth().signInWithCredential(credential);
  //     console.log(user);
  //   } catch (error) {
  //     console.error(error);
  //   }

    return(
      <Button 
        title="Sign in with Google"
        onPress={()=> onGoogleButtonPress().then(() => console.log('Signed In with Google!'))}
      />
    )
  }
  


export default GoogleSignIn




// function GoogleSignIn() {
  
//   GoogleSignin.configure({
//     webClientId: "457872004929-ju6bu2j6iss4pqb0f1qh8oolo3ab67nf.apps.googleusercontent.com",
//   });

//   return(
//     <Button 
//       title="Sign in with Google"
//       onPress={()=> onGoogleButtonPress().then(() => console.log('Signed In with Google!'))}
//     />
//   );
// }


// export default GoogleSignIn;

// async function onGoogleButtonPress() {
//   // Check if your device supports Google Play
//   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }
