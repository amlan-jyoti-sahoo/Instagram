import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {reelData} from '../data/reelData';
import SingleReel from './SingleReel';

const ReelComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const renderItem = ({item, index}) => {
    <SingleReel item={item} index={index} currentIndex={currentIndex} />;
  };

  const changeIndexValueHandler = ({index}) => {
    setCurrentIndex(index);
  };
  return (
    <SwiperFlatList
      data={reelData}
      vertical={true}
      renderItem={renderItem}
      onChangeIndex={changeIndexValueHandler}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ReelComponent;

const styles = StyleSheet.create({});
