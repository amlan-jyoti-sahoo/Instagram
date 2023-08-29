import {
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { PostDataItem } from '../data/postData';


const PostRender = ({filteredPost} : {filteredPost:PostDataItem}) => {
  const navigation = useNavigation();
  const renderPosts = ({item}: {item:PostDataItem}) => {
    function postPressHandler(postId: number) {
      console.log('hello');
      navigation.navigate('PostScreen', {
        postId: postId,
        filteredPost: filteredPost,
      });
    }
    return (
      <View style={styles.yourPostImageContainer}>
        <TouchableOpacity onPress={() => postPressHandler(item.postId)}>
          <Image source={item.post.postImage} style={styles.yourPostImage} />
        </TouchableOpacity>
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
        keyExtractor={item => item.postId}
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
