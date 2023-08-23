import {
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PostRender from '../PostRender';
import ReelRender from '../ReelRender';
import TagPostRender from '../TagPostRender';

const PostDataContainer = ({filteredPost}) => {
  const [tabNo, setTabNo] = useState(1);
  function PostReelRenderHandler(tabNo) {
    setTabNo(tabNo);
  }

  return (
    <View style={styles.postRootContainer}>
      <View style={styles.postHeaderContainer}>
        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => {
            PostReelRenderHandler(1);
          }}>
          <View
            style={
              tabNo === 1
                ? styles.postHeaderInnerContainerActive
                : styles.postHeaderInnerContainerInActive
            }>
            <MaterialIcons name="grid-on" size={28} color={'black'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => {
            PostReelRenderHandler(2);
          }}>
          <View
            style={
              tabNo === 2
                ? styles.postHeaderInnerContainerActive
                : styles.postHeaderInnerContainerInActive
            }>
            <MaterialIcons
              name="video-collection"
              size={28}
              color={'#535353'}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => {
            PostReelRenderHandler(3);
          }}>
          <View
            style={
              tabNo === 3
                ? styles.postHeaderInnerContainerActive
                : styles.postHeaderInnerContainerInActive
            }>
            <MaterialCommunityIcons
              name="contacts-outline"
              size={28}
              color={'#535353'}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Post Render Component */}
      {tabNo === 1 && <PostRender filteredPost={filteredPost} />}
      {tabNo === 2 && <ReelRender />}
      {tabNo === 3 && <TagPostRender />}
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

  postRootContainer: {
    width: '100%',
  },
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
    width: '100%',
    height: '100%',
    borderBottomWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postHeaderInnerContainerInActive: {
    width: '100%',
    height: '100%',
    // borderBottomWidth: 2,
    // borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchContainer: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
