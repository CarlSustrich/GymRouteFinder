import React from 'react';
import { View, Image } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import {Dimensions} from 'react-native';

const ZoomableImage = ({  }) => {

  const url="https://images.squarespace-cdn.com/content/v1/5a01fd2db1ffb6985b2a9ac5/1600886085976-J5SC3I8CMUVYXTS1OI6S/vital+level+1+climbing+map"

  return (
    <View style={{ flex: 1 }}>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height / 3}
        imageWidth={0}
        imageHeight={0}
        enableSwipeDown={true}
        onSwipeDown={() => console.log('swipe down')}
      >
        <Image
          style={{ width: 300, height: 400 }}
          source={{ uri: url }}
        />
      </ImageZoom>
    </View>
  );
};

export default ZoomableImage;
