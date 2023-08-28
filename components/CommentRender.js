import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {postSlice} from '../store/postSlice';
import SingleComment from './SingleComment';

const CommentRender = ({selectedPost}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData);
  const post = useSelector(state => state.post.postData);

  const [inputText, setInputText] = useState('');
  const handleInputChange = text => {
    setInputText(text);
  };
  const selectedPostIndex = post.findIndex(
    item => item.postId === selectedPost.postId,
  );
  const [allComments, setAllComments] = useState(
    post[selectedPostIndex].post.comments,
  );

  function sendButtonPressHandler() {
    dispatch(
      postSlice.actions.setNewComment({
        postId: selectedPost.postId,
        comment: inputText,
      }),
    );
    const prevComments = [...allComments];
    const newComment = {
      commentId: prevComments.length + 1,
      userId: 1,
      comment: inputText,
      likes: 0,
      isLiked: false,
    };
    setAllComments([...prevComments, newComment]);
    setInputText('');
  }

  const renderItem = ({item}) => {
    return <SingleComment item={item} selectedPost={selectedPost} />;
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
      <FlatList data={allComments} renderItem={renderItem} />
      <View style={styles.bottomContainer}>
        <View>
          <Image source={user[0].profileImage} style={styles.image} />
        </View>
        <TextInput
          placeholder="Add a comment.."
          style={styles.input}
          value={inputText}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity onPress={sendButtonPressHandler}>
          <Ionicons name="send" size={30} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentRender;

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
  bottomContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  image: {height: 40, width: 40, borderRadius: 50},

  //input

  input: {
    width: 280,
    height: 40,
    borderColor: '#000000',
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 8,
    fontSize: 15,
    paddingLeft: 10,
    fontWeight: '500',
  },
});
