import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TagPostRender = () => {
  return (
    <View style={styles.rootContainer}>
      <Image
        source={require('../assets/images/NoPost.jpeg')}
        style={styles.image}
      />
    </View>
  );
};

export default TagPostRender;

const styles = StyleSheet.create({
  rootContainer: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    height: 150,
    width: 150,
  },
});
