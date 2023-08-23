import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {UserData} from '../data/userData';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch, useSelector} from 'react-redux';
import {postSlice} from '../store/postSlice';
import {userSlice} from '../store/userSlice';

const Posts = ({PostEllipsisOnpress}) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.postData);
  const user = useSelector(state => state.user.userData);

  const renderPosts = ({item}) => {
    function ProfilePressHandler() {
      dispatch(userSlice.actions.showStory(item.userId));
    }
    const postUserIndex = user.findIndex(user => user.userId === item.userId);
    const postUser = user[postUserIndex];
    function likePressHandler() {
      dispatch(postSlice.actions.setLike(item.post.postId));
    }
    function bookMarkPressHandler() {
      dispatch(postSlice.actions.setBookMark(item.post.postId));
      {
        !item.post.isBookmarked
          ? ToastAndroid.show('Saved to Collections!!', ToastAndroid.SHORT)
          : null;
      }
    }
    return (
      <View style={styles.PostRootCotainer}>
        <View style={styles.postHeaderContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={ProfilePressHandler}>
              <View
                style={
                  postUser.hasStatus
                    ? styles.postHeaderImageContainer
                    : styles.postHeaderImageNonStatusContainer
                }>
                <Image
                  source={postUser.profileImage}
                  style={styles.postHeaderImage}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.textBold}>{postUser.userName}</Text>
          </View>
          <TouchableOpacity onPress={PostEllipsisOnpress}>
            <Icon
              style={{marginRight: 10}}
              name="ellipsis-vertical"
              size={24}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={item.post.postImage} style={styles.postImage} />
        </View>
        <View style={styles.postBottomContainer}>
          <View style={styles.postBottomInnerLeftContainer}>
            <TouchableOpacity onPress={likePressHandler}>
              <MaterialCommunityIcons
                name={item.post.isLiked ? 'cards-heart' : 'cards-heart-outline'}
                size={30}
                color={item.post.isLiked ? '#f01717' : 'black'}
              />
            </TouchableOpacity>
            <FeatherIcon
              style={{transform: [{rotateY: '180deg'}]}}
              name="message-circle"
              size={30}
              color={'black'}
            />
            <FeatherIcon name="send" size={30} color={'black'} />
          </View>
          <TouchableOpacity onPress={bookMarkPressHandler}>
            <MaterialCommunityIcons
              style={{marginRight: 10}}
              name={item.post.isBookmarked ? 'bookmark' : 'bookmark-outline'}
              size={30}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.textBold, {marginLeft: 10}]}>
          {`${item.post.likes} likes`}
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
      }}>
      <FlatList data={post} renderItem={renderPosts} />
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
