import { Image, StyleSheet, View } from "react-native"
import { NativeComponentType } from "react-native/Libraries/Utilities/codegenNativeComponent";
import ImageViewer from 'react-native-image-zoom-viewer';
import { SafeAreaView } from "react-native-safe-area-context";

const  GymPic = (props) => {
  // const images = [
  //   {
  //     url:
  //       'https://images.squarespace-cdn.com/content/v1/5a01fd2db1ffb6985b2a9ac5/1600886085976-J5SC3I8CMUVYXTS1OI6S/vital+level+1+climbing+map',
  //   }
  // ];


   return(
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <ImageViewer
              imageUrls={props.src}
              renderIndicator={() => null}
            />
          </View>
        </SafeAreaView>
      );
}

export default GymPic

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  }
  });
