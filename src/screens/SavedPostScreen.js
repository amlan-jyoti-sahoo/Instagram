import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import PostDataContainer from '../components/Profile/PostDataContainer';
import SavedPostData from '../components/SavedPostData';

const SavedPostScreen = () => {
  const post = useSelector(state => state.post.postData);
  const filteredPost = post.filter(item => item.post.isBookmarked === true);
  return (
    <View style={styles.rootContainer}>
      {/* <PostDataContainer filteredPost={filteredPost} /> */}
      <SavedPostData filteredPost={filteredPost} />
    </View>
  );
};

export default SavedPostScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
