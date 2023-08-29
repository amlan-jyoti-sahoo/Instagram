import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import SingleReel from '../components/SingleReel';
import {useDispatch, useSelector} from 'react-redux';
import {postSlice} from '../store/postSlice';
import {userSlice} from '../store/userSlice';
import { RootState } from '../store/store';
import { ReelDataItem } from '../data/reelData';



const ReelScreen=  ({route}:{route: any}) => {
  const {reelId} = route.params;
  const reel = useSelector((state : RootState) => state.reel.reelData);

  const renderItem = ({item, index}:{item: ReelDataItem, index: number}) => {
    return <SingleReel item={item} currentIndex={1} index={index}/>;
  };
 
  const flatListRef = useRef<FlatList<ReelDataItem>>(null);
  useEffect(() => {
    const index = reel.findIndex((item : ReelDataItem) => item.reelId === reelId);

    if (index !== -1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({index});
    }
  }, [reelId]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.reelHeaderContainer}>
        <Text style={styles.reelTitle}>Reels</Text>
        <Feather name="camera" size={25} color={'white'} />
      </View>
      <FlatList
        data={reel}
        ref={flatListRef}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
        renderItem={renderItem}
      />
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
    top: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
    padding: 10,
  },
  reelTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Muli-Bold',
  },
});
