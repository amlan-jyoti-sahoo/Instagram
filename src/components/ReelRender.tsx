import {
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import Video from 'react-native-video';
import { ReelDataItem } from '../data/reelData';

const ReelRender = ({filteredReel}: {filteredReel: ReelDataItem}) => {
  const navigation = useNavigation();

  function postPressHandler(postId: number) {
    console.log('hello');
    navigation.navigate('PostScreen', {
      postId: postId,
      filteredPost: filteredPost,
    });
  }

  const renderPosts = ({item}:{item : ReelDataItem}) => {
    function postPressHandler(reelId: number) {
      navigation.navigate('ReelScreen', {
        reelId: reelId,
      });
    }
    return (
      <View style={styles.yourPostVideoContainer}>
        <TouchableOpacity onPress={() => postPressHandler(item.reelId)}>
          <Video
            repeat={true}
            resizeMode="cover"
            // paused={true}
            muted={true}
            source={item.reel.video}
            style={styles.video}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.allPostContainer}>
      <FlatList
        numColumns={3}
        scrollEnabled={true}
        data={filteredReel}
        renderItem={renderPosts}
        keyExtractor={item=> item.reelId.toString()}
      />
    </View>
  );
};

export default ReelRender;

const styles = StyleSheet.create({
  allPostContainer: {
    width: '100%',
    height: '100%',
    marginTop: 2,
  },
  yourPostVideoContainer: {
    // borderWidth:1,
    margin: '0.33%',
    height: 230,
    width: '33%',
  },
  video: {
    height: 230,
    width: '100%',
  },
});
