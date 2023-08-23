import {FlatList, StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PostRender from '../PostRender';

const PostDataContainer = ({filteredPost}) => {
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
      <PostRender filteredPost={filteredPost} />
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
});
