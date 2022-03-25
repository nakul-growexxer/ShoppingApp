import React from 'react';
import {View, Text, Image} from 'react-native';
import HomeScreenStyles from '../../screens/style/HomeScreenStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductItem = ({item}) => {
  return (
    <View style={HomeScreenStyles.root}>
      <Image
        style={HomeScreenStyles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={HomeScreenStyles.rightContainer}>
        <Text style={HomeScreenStyles.title} numberOfLines={3}>
          {item.title}
        </Text>
        {/*Ratings*/}
        <View style={HomeScreenStyles.ratings}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              style={HomeScreenStyles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={HomeScreenStyles.price}>
          From ₹{item.price}
          {item.oldprice && (
            <Text style={HomeScreenStyles.oldprice}>₹{item.oldprice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
