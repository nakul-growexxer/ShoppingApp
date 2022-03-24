import React from 'react';
import {View, FlatList, Image, TouchableOpacity, Text} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import styles from './styles';

const ImageScroll = ({images}) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 20}]}
            source={{uri: item}}
          />
        )}
        horizontal
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default ImageScroll;
