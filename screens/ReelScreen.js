import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import ReelComponent from '../components/ReelComponent';

const ReelScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.reelHeaderContainer}>
        <Text style={styles.reelTitle}>Reels</Text>
        <Feather name="camera" size={25} color={'white'} />
      </View>
      <ReelComponent />
    </SafeAreaView>
  );
};

export default ReelScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  reelHeaderContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: 10,
  },
  reelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
