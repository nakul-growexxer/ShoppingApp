import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductScreen from './src/screens/product';
import ShopingCartScreen from './src/screens/shopingcart';
import HomeScreen from './src/screens/home';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={HomeScreen} name="Home"></Tab.Screen>
      <Tab.Screen component={ProductScreen} name="Product"></Tab.Screen>
      <Tab.Screen component={ShopingCartScreen} name="Cart"></Tab.Screen>
      <></>
    </Tab.Navigator>
  );
};

export default BottomTabNav;
