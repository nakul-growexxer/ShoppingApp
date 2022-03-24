import React from 'react';
import {View, FlatList, Text} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';
import QuantityItem from '../../components/QuantityItem';
import product from '../../data/product';
import ShopingCartScreenStyle from '../style/ShopingCartScreenStyle';
import Button from '../../components/Button';

const ShopingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  return (
    <View style={ShopingCartScreenStyle.root}>
      <View>
        <Text style={ShopingCartScreenStyle.text}>
          subtotal ({products.length} items):{totalPrice.toFixed(2)}
        </Text>
        <Button
          text={'proceed to checkout'}
          onpress={() => console.log(totalPrice)}
        />
      </View>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
      />
    </View>
  );
};

export default ShopingCartScreen;
