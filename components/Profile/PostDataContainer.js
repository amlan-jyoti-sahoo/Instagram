import {FlatList, StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PostDataContainer = ({filteredPost}) => {
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
        <View style={styles.postHeaderInnerContainerActive}>
          <MaterialIcons name="grid-on" size={28} color={'black'} />
        </View>
        <View style={styles.postHeaderInnerContainerInActive}>
          <MaterialIcons name="video-collection" size={28} color={'#535353'} />
        </View>
        <View style={styles.postHeaderInnerContainerInActive}>
          <MaterialCommunityIcons
            name="contacts-outline"
            size={28}
            color={'#535353'}
          />
        </View>
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

export default PostDataContainer;

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

  postRootContainer: {},
  postHeaderContainer: {
    paddingTop: 10,
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  postHeaderInnerContainerActive: {
    width: '33%',
    height: '100%',
    borderBottomWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postHeaderInnerContainerInActive: {
    width: '33%',
    height: '100%',
    // borderBottomWidth: 2,
    // borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
