import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {reelData} from '../data/reelData';
import SingleReel from './SingleReel';
import {PostData} from '../data/postData';
import Video from 'react-native-video';

const ReelComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeIndexValueHandler = ({index}) => {
    setCurrentIndex(index);
  };

  const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
  return (
    <SwiperFlatList
      // autoplay
      // autoplayDelay={2}
      // autoplayLoop
      index={2}
      // showPagination
      // onChangeIndex={changeIndexValueHandler}
      vertical={true}
      data={colors}
      renderItem={({item, index}) => {
        <View style={[styles.child, {backgroundColor: item}]}>
          <Text style={styles.text}>{item}</Text>
        </View>;
      }}
    />
    //
    // <SingleReel />
  );
};

export default ReelComponent;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
});
