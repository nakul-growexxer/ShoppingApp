import React, {useState} from 'react';
import {View, Text} from 'react-native';
import QuantityItem from '../../components/QuantityItem';
import ProductScreenStyles from '../style/ProductScreenStyles';
import product from '../../data/product';
import Button from '../../components/Button';

const ProductScreen = () => {
  return (
    <View style={ProductScreenStyles.root}>
      <Text style={ProductScreenStyles.title}>{product.title}</Text>
      {/* Image */}
      {/* price */}
      <Text style={ProductScreenStyles.price}>
        From ₹{product.price}
        {product.oldPrice && (
          <Text style={ProductScreenStyles.oldprice}>₹{product.oldPrice}</Text>
        )}
      </Text>
      {/* discription */}
      <Text style={ProductScreenStyles.description}>{product.description}</Text>
      {/* Qntity */}

      <QuantityItem />

      {/* BTNS */}
      <Button text={'ADD TO CART'} onPress={console.log('add to cart')} />
      <Button text={'BUY NOW'} onPress={console.log('add to buy')} />
    </View>
  );
};

export default ProductScreen;
