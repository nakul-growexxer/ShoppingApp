import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button = ({text, onpress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onpress} style={styles.root}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
