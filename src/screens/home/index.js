import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
  const [Product, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/').then(({data}) => {
      console.log(data);
      setProducts(data);
    });
  }, []);
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </View>
  );
};

export default HomeScreen;
