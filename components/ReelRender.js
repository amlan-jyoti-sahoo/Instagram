import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ReelRender = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>No Reel uploaded Yet!!</Text>
    </View>
  );
};

export default ReelRender;

const styles = StyleSheet.create({
  rootContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
