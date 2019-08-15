import {
  Image, View, Text, TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

import styles from './styles';

const Collection = ({ cover, title, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.collection_item}>
      { cover
        ? <Image source={cover} style={styles.collection_item_image} />
        : <View style={styles.collection_default_cover} />
      }
      <Text style={styles.collection_item_title}>
        {title}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

export default Collection;