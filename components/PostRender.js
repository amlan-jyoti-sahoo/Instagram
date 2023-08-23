import {FlatList, StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
const PostRender = ({filteredPost}) => {
  const renderPosts = ({item}) => {
    return (
      <View style={styles.yourPostImageContainer}>
        <Image source={item.post.postImage} style={styles.yourPostImage} />
      </View>
    );
  };

  return (
    <View style={styles.allPostContainer}>
      <FlatList
        numColumns={3}
        scrollEnabled={true}
        data={filteredPost}
        renderItem={renderPosts}
      />
    </View>
  );
};

export default PostRender;

const styles = StyleSheet.create({
  allPostContainer: {
    width: '100%',
    height: '100%',
    marginTop: 2,
  },
  yourPostImageContainer: {
    // borderWidth:1,
    margin: '0.33%',
    height: 135,
    width: '33%',
  },
  yourPostImage: {
    height: 135,
    width: '100%',
  },
});
