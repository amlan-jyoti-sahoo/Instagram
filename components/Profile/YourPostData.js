import {FlatList, StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const YourPostData = ({filteredPost}) => {
  const renderPosts = ({item}) => {
    return (
      <View style={styles.yourPostImageContainer}>
        <Image source={item.post.postImage} style={styles.yourPostImage} />
      </View>
    );
  };

  return (
    <View style={styles.postRootContainer}>
      <View style={styles.postHeaderContainer}>
        <MaterialIcons name="grid-on" size={28} color={'black'} />
        <MaterialIcons name="video-collection" size={28} color={'#535353'} />
        <MaterialCommunityIcons
          name="contacts-outline"
          size={28}
          color={'#535353'}
        />
      </View>
      <View style={styles.allPostContainer}>
        <FlatList
          numColumns={3}
          scrollEnabled={true}
          data={filteredPost}
          renderItem={renderPosts}
        />
      </View>
    </View>
  );
};

export default YourPostData;

const styles = StyleSheet.create({
  textBold: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
  },
  textNormal: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
  },

  postRootContainer: {
    marginTop: 30,
  },
  postHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  allPostContainer: {
    marginTop: 20,
  },
  yourPostImageContainer: {
    // borderWidth:1,
    margin: 1,
  },
  yourPostImage: {
    height: 135,
    width: 135,
  },
});
