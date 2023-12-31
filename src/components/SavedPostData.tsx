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
import PostRender from './PostRender';
import ReelRender from './ReelRender';
import TagPostRender from './TagPostRender';
import {useDispatch, useSelector} from 'react-redux';
import { PostDataItem } from '../data/postData';
import { RootState } from '../store/store';
import { ReelDataItem } from '../data/reelData';
const SavedPostData = ({filteredPost}: {filteredPost : PostDataItem}) => {
  const reel = useSelector((state: RootState) => state.reel.reelData);
  const filteredReel = reel.filter((item: ReelDataItem) => item.reel.isBookmarked === true);

  const [tabNo, setTabNo] = useState(1);
  function PostReelRenderHandler(tabNo: number) {
    setTabNo(tabNo);
    console.log(tabNo);
  }

  return (
    <View style={styles.postRootContainer}>
      <View style={styles.postHeaderContainer}>
        <View
          style={
            tabNo === 1
              ? styles.postHeaderInnerContainerActive
              : styles.postHeaderInnerContainerInActive
          }>
          <TouchableOpacity
            onPress={() => {
              PostReelRenderHandler(1);
            }}>
            <View style={{height: '100%', width: '100%'}}>
              <MaterialIcons name="grid-on" size={28} color={'black'} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={
            tabNo === 2
              ? styles.postHeaderInnerContainerActive
              : styles.postHeaderInnerContainerInActive
          }>
          <TouchableOpacity
            onPress={() => {
              PostReelRenderHandler(2);
            }}>
            <MaterialIcons
              name="video-collection"
              size={28}
              color={'#535353'}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Post Render Component */}
      {tabNo === 1 && <PostRender filteredPost={filteredPost} />}
      {tabNo === 2 && <ReelRender filteredReel={filteredReel} />}
    </View>
  );
};

export default SavedPostData;

const styles = StyleSheet.create({
  textBold: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Muli-Bold',
  },
  textNormal: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Muli-Regular',
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
    width: '49%',
    height: '100%',
    borderBottomWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postHeaderInnerContainerInActive: {
    width: '49%',
    height: '100%',
    // borderBottomWidth: 2,
    // borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
