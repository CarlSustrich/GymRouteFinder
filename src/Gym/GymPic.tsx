import { Image, StyleSheet, View } from "react-native"
import { NativeComponentType } from "react-native/Libraries/Utilities/codegenNativeComponent"

const GymPic = (addy) => {
  return (
    // <View style={styles.body}>
      <Image style={styles.body} source={{uri: addy.src}}></Image>
    // </View>
  )
}
export default GymPic

const styles = StyleSheet.create({
    body: {
      // flex: 1,
      // height: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '70%',
      resizeMode: "contain"
    }
  });
