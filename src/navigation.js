import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNav from '../bottonTab';

const Root = createNativeStackNavigator();

const NavigationBox = () => {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen component={BottomTabNav} name="HomeTabs"></Root.Screen>
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default NavigationBox;
