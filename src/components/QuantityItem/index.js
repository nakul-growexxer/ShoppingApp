import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const QuantityItem = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
  };
  const onDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.IncDecBtn} onPress={onIncrement}>
        <Text style={styles.btntext}>+</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity style={styles.IncDecBtn} onPress={onDecrement}>
        <Text style={styles.btntext}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuantityItem;
