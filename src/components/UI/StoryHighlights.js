import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const StoryHighlights = () => {
  return <View style={styles.storyContainer}></View>;
};

export default StoryHighlights;

const styles = StyleSheet.create({
  storyContainer: {
    height: 70,
    width: 70,
    borderWidth: 1,
    marginHorizontal: 12,
    borderColor: '#dfe0e1',
    backgroundColor: '#dfe0e1',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
