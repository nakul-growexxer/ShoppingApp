import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  oldprice: {
    fontSize: 20,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  description: {
    marginVertical: 10,
    lineHeight: 18,
    fontSize: 18,
  },
});
