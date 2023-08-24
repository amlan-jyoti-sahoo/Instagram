import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import Video from 'react-native-video';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SingleReel = ({item, index, currentIndex}) => {
  const videoRef = useRef(null);

  const onBuffer = buffer => {
    console.log('video is Buffering', buffer);
  };
  const onError = error => {
    console.log('video Error', error);
  };
  return (
    <View style={styles.videoContainer}>
      <View style={styles.reelSideContainer}>
        <View style={styles.reelSideInnerContainer}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name={item.reel.isLiked ? 'cards-heart' : 'cards-heart-outline'}
              size={35}
              color={item.reel.isLiked ? '#f01717' : 'white'}
            />
          </TouchableOpacity>
          <Text style={styles.textBold}>{item.reel.likes}</Text>
        </View>
        <View style={styles.reelSideInnerContainer}>
          <Feather
            style={{transform: [{rotateY: '180deg'}]}}
            name="message-circle"
            size={30}
            color={'white'}
          />
          <Text style={styles.textBold}>123</Text>
        </View>
        <View style={styles.reelSideInnerContainer}>
          <Feather name="send" size={30} color={'white'} />
          <Text style={styles.textBold}>234k</Text>
        </View>
        <View style={styles.reelSideInnerContainer}>
          <Ionicons name="ellipsis-vertical" size={30} color={'white'} />
        </View>
      </View>
      <View style={styles.reelleftSideContainer}>
        <View style={styles.logoNameContainer}>
          <View
            style={
              true
                ? styles.postHeaderImageContainer
                : styles.postHeaderImageNonStatusContainer
            }>
            <Image
              source={require('../assets/images/Amlan.png')}
              style={styles.postHeaderImage}
            />
          </View>
          <Text style={styles.textBold}>amlan_jyoti_aj</Text>
        </View>
        <View style={{marginLeft: 12}}>
          <Text style={styles.textNormal}>
            Space Habitat in Future. #FutureSpaceHome
          </Text>
          <Text style={styles.textlight}>
            #FutureSpaceHome #space #Bishop Ring
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{height: '100%', width: '100%', position: 'absolute'}}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={true}
          controls={true}
          muted={true}
          source={item.reel.video}
          style={styles.video}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SingleReel;

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  textBold: {
    fontWeight: 'bold',
    color: 'white',
  },
  textNormal: {
    fontWeight: '500',
    color: 'white',
  },
  textlight: {
    fontWeight: '200',
    color: 'white',
  },
  videoContainer: {
    height: height,
    width: width,
    position: 'relative',
  },
  video: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  reelSideContainer: {
    position: 'absolute',
    height: 300,
    bottom: 100,
    right: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
    padding: 10,
  },
  reelSideInnerContainer: {
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reelleftSideContainer: {
    position: 'absolute',
    height: 100,
    width: 300,
    bottom: 100,
    left: 5,
    zIndex: 1,
  },
  reelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  postHeaderImageContainer: {
    borderWidth: 1,
    height: 40,
    width: 40,
    borderColor: '#b42727',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  postHeaderImageNonStatusContainer: {
    borderWidth: 1,
    height: 40,
    width: 40,
    borderColor: '#b1abab',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 10,
  },
  postHeaderImage: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  logoNameContainer: {
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
