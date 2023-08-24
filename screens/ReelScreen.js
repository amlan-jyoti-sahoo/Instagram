import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import SingleReel from '../components/SingleReel';
import {useDispatch, useSelector} from 'react-redux';
import {postSlice} from '../../store/postSlice';
import {userSlice} from '../../store/userSlice';

const ReelScreen = () => {
  const reel = useSelector(state => state.reel.reelData);

  const renderItem = item => {
    return <SingleReel item={item} />;
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.reelHeaderContainer}>
        <Text style={styles.reelTitle}>Reels</Text>
        <Feather name="camera" size={25} color={'white'} />
      </View>
      <FlatList data={reel} renderItem={({item}) => renderItem(item)} />
    </View>
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
