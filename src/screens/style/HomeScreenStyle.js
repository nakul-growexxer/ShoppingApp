import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginVertical: 3,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 15,
    backgroundColor: '#ffffff',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
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
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});
