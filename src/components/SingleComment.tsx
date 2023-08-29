import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {postSlice} from '../store/postSlice';
import { PostDataItem } from '../data/postData';
import { RootState } from '../store/store';
import { UserDataItem } from '../data/userData';
const SingleComment = ({item, selectedPost}: {item: PostDataItem, selectedPost: PostDataItem}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.userData);
  const post = useSelector((state: RootState) => state.post.postData);

  const selectedUserIndex = user.findIndex((user: UserDataItem) => user.userId === item.userId);
  const [likes, setLikes] = useState(item.likes);
  const [isLiked, setIsLiked] = useState(item.isLiked);

  let likesCount = likes;
  function likePressHandler() {
    dispatch(
      postSlice.actions.setCommentLike({
        commentId: item.commentId,
        postId: selectedPost.postId,
      }),
    );
    setIsLiked(!isLiked);
    {
      isLiked ? likesCount-- : likesCount++;
    }
    setLikes(likesCount);
  }

  return (
    <View style={styles.commentsRootContainer}>
      <View style={styles.singleCommentBoxContainer}>
        <View
          style={
            user[selectedUserIndex].hasStatus
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
              name={isLiked ? 'cards-heart' : 'cards-heart-outline'}
              size={24}
              color={isLiked ? '#f01717' : '#555353'}
            />
          </TouchableOpacity>
          <Text style={styles.textNormal}>{likesCount}</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleComment;

const styles = StyleSheet.create({
  textBold: {
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Muli-Bold',
  },
  textNormal: {
    fontWeight: '400',
    color: '#524f4f',
    fontSize: 12,
    fontFamily: 'Muli-Regular',
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
