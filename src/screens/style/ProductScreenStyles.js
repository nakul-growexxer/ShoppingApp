import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldprice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  description: {
    marginVertical: 10,
    lineHeight: 18,
  },
});
