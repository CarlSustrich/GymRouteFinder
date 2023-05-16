import { Image, StyleSheet, View } from "react-native"
import { NativeComponentType } from "react-native/Libraries/Utilities/codegenNativeComponent";
import ImageViewer from 'react-native-image-zoom-viewer';
import { SafeAreaView } from "react-native-safe-area-context";

const  GymPic = (route) => {

  const images = [
    {
      url: route['src'],
    }
  ];


   return(
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <ImageViewer
              imageUrls={images}
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
