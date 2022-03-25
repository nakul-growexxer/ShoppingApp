import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import QuantityItem from '../QuantityItem';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CartProductItem = ({cartItem}) => {
  const {quantityprop, item} = cartItem;
  const [quantity, setQuantity] = useState(quantityprop);
  return (
    <View style={styles.root}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          {/*Ratings*/}
          <View style={styles.ratings}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${item.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}
            <Text>{item.ratings}</Text>
          </View>
          <Text style={styles.price}>
            From ₹{item.price}
            {item.oldprice && (
              <Text style={styles.oldprice}>₹{item.oldprice}</Text>
            )}
          </Text>
        </View>
        <View style={styles.quantityContainer}>
          <QuantityItem quantity={quantity} setQuantity={setQuantity} />
        </View>
      </View>
    </View>
  );
};

export default CartProductItem;
