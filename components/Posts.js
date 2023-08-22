import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {UserData} from '../data/userData';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Posts = () => {
  const renderPosts = ({item}) => {
    return (
      <View style={styles.PostRootCotainer}>
        <View style={styles.postHeaderContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={
                item.hasStatus
                  ? styles.postHeaderImageContainer
                  : styles.postHeaderImageNonStatusContainer
              }>
              <Image
                source={require('../assets/images/Shubham.png')}
                style={styles.postHeaderImage}
              />
            </View>
            <Text style={styles.textBold}>Shubham Kadam</Text>
          </View>
          <Icon
            style={{marginRight: 10}}
            name="ellipsis-vertical"
            size={24}
            color={'black'}
          />
        </View>
        <View>
          <Image
            source={require('../assets/images/Mountain.jpeg')}
            style={styles.postImage}
          />
        </View>
        <View style={styles.postBottomContainer}>
          <View style={styles.postBottomInnerLeftContainer}>
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={30}
              color={'black'}
            />
            <FeatherIcon
              style={{transform: [{rotateY: '180deg'}]}}
              name="message-circle"
              size={30}
              color={'black'}
            />
            <FeatherIcon name="send" size={30} color={'black'} />
          </View>
          <MaterialCommunityIcons
            style={{marginRight: 10}}
            name="bookmark-outline"
            size={30}
            color={'black'}
          />
        </View>
        <Text style={[styles.textBold, {marginLeft: 10}]}>279 likes</Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
      }}>
      <FlatList data={UserData} renderItem={renderPosts} />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  textBold: {
    color: 'black',
    fontWeight: '600',
  },
  textNormal: {
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
  },
  PostRootCotainer: {
    marginBottom: 10,
  },
  postHeaderContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postHeaderImageContainer: {
    borderWidth: 2,
    height: 45,
    width: 45,
    borderColor: '#b42727',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  postHeaderImageNonStatusContainer: {
    height: 45,
    width: 45,
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

  postImage: {width: '100%', height: 400},
  postBottomContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postBottomInnerLeftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    width: 130,
  },
});
