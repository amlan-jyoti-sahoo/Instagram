import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Posts from '../components/Home/Posts';
import {useSelector} from 'react-redux';

const PostScreen = ({route}) => {
  // const post = useSelector(state => state.post.postData);
  // const filteredPost = post.filter(item => item.userId === 1);
  const {filteredPost, postId} = route.params;
  console.log(filteredPost);
  console.log(postId);
  return (
    <View style={styles.rootContainer}>
      <Posts data={filteredPost} postId={postId} />
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
