import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TagPostRender = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Not yet Tagged in any post !</Text>
    </View>
  );
};

export default TagPostRender;

const styles = StyleSheet.create({
  rootContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
