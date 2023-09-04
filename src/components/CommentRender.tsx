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
import { PostDataItem } from '../data/postData';
import { RootState } from '../store/store';

const CommentRender = ({selectedPost}: {selectedPost : PostDataItem}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.userData);
  const post = useSelector((state: RootState) => state.post.postData);

  const [inputText, setInputText] = useState('');
  const handleInputChange = (text: string) => {
    setInputText(text);
  };
  const selectedPostIndex = post.findIndex(
    (item: PostDataItem) => item.postId === selectedPost.postId,
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

  const renderItem = ({item}:{item: PostDataItem}) => {
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
          placeholderTextColor={'grey'}
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
    width: '100%',
    padding: 15,
    backgroundColor: '#ffffff',
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
  
  bottomContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  image: {height: 40, width: 40, borderRadius: 50},

  //input

  input: {
    width: '70%',
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
