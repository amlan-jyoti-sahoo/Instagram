import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import Video from 'react-native-video';

const SingleReel = ({item, index, currentIndex}) => {
  const videoRef = useRef(null);

  const onBuffer = buffer => {
    console.log('video is Buffering', buffer);
  };
  const onError = error => {
    console.log('video Error', error);
  };
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity style={styles.videoContainer}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={false}
          source={item.reel.video}
          style={styles.video}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SingleReel;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  videoContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
