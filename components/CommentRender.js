import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {postSlice} from '../store/postSlice';

const CommentRender = ({selectedPost}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData);
  const post = useSelector(state => state.post.postData);

  const renderItem = ({item}) => {
    const selectedUserIndex = user.findIndex(
      user => user.userId === item.userId,
    );
    function likePressHandler() {
      dispatch(
        postSlice.actions.setCommentLike({
          commentId: item.commentId,
          postId: selectedPost.postId,
        }),
      );
    }
    return (
      <View style={styles.commentsRootContainer}>
        <View style={styles.singleCommentBoxContainer}>
          <View
            style={
              user[0].hasStatus
                ? styles.postHeaderImageContainer
                : styles.postHeaderImageNonStatusContainer
            }>
            <Image
              source={user[selectedUserIndex].profileImage}
              style={styles.postHeaderImage}
            />
          </View>
          <View style={styles.commentTextContainer}>
            <Text style={[styles.textBold, {color: '#605f5f'}]}>
              {user[selectedUserIndex].userName}
              <Text style={styles.textNormal}> 2d</Text>
            </Text>
            <Text style={styles.textBold}>{item.comment}</Text>
            <View style={[styles.commentTextInnerContainer]}>
              <Text style={styles.textNormal}>Reply</Text>
              <Text style={styles.textNormal}>See translation</Text>
            </View>
          </View>
          <View style={styles.commentRightSideContainer}>
            <TouchableOpacity onPress={likePressHandler}>
              <MaterialCommunityIcons
                name={item.isLiked ? 'cards-heart' : 'cards-heart-outline'}
                size={24}
                color={item.isLiked ? '#f01717' : '#555353'}
              />
            </TouchableOpacity>
            <Text style={styles.textNormal}>{item.likes}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.menuModalContainer}>
      <View style={styles.knobContainer}>
        <View style={styles.knob}></View>
      </View>
      <View style={styles.headerBox}>
        <Text style={styles.textBold}>Comments</Text>
      </View>
      <View style={styles.divider}></View>
      <FlatList data={selectedPost.post.comments} renderItem={renderItem} />
    </View>
  );
};

export default CommentRender;

const styles = StyleSheet.create({
  textBold: {
    fontWeight: 'bold',
    color: '#000000',
  },
  textNormal: {
    fontWeight: '400',
    color: '#524f4f',
    fontSize: 12,
  },

  menuModalContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  knobContainer: {
    width: '100%',
    alignItems: 'center',
  },
  knob: {
    height: 5,
    width: 35,
    borderWidth: 1,
    backgroundColor: '#7b7777',
    borderRadius: 50,
  },
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  headerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '100%',
  },
  commentsRootContainer: {
    marginTop: 20,
    // height: '100%',
  },
  singleCommentBoxContainer: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postHeaderImageContainer: {
    borderWidth: 1,
    height: 50,
    width: 50,
    borderColor: '#b42727',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  postHeaderImageNonStatusContainer: {
    borderWidth: 1,
    height: 50,
    width: 50,
    borderColor: '#b1abab',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 10,
  },
  postHeaderImage: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  commentTextContainer: {
    width: '75%',
  },
  commentTextInnerContainer: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
  },
  commentRightSideContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
