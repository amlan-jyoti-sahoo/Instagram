import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {UserData} from '../data/userData';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '.././store/userSlice';
import {shouldUseActivityState} from 'react-native-screens';
import StoryHighlights from '../components/UI/StoryHighlights';
import {PostData} from '../data/postData';

const ProfileScreen = () => {
  const user = useSelector(state => state.user.userData);
  const post = useSelector(state => state.post.postData);
  const [showHighlights, setShowHighlights] = useState(true);

  const filteredPost = post.filter(item => item.userId === 1);

  const showStoryHighlightsHandler = () => {
    setShowHighlights(!showHighlights);
  };

  const renderPosts = ({item}) => {
    return (
      <View style={styles.yourPostImageContainer}>
        <Image source={item.post.postImage} style={styles.yourPostImage} />
      </View>
    );
  };

  return (
    <View style={styles.rootContainer}>
      {/* Upper Header Container */}
      <View style={styles.upperHeaderContainer}>
        <View style={styles.upperHeaderInnerLeftContainer}>
          <Text style={[styles.textBold, {fontSize: 20}]}>amlan_jyoti_aj</Text>

          <Octicons name="chevron-down" size={20} color="black" />
          <Octicons name="dot-fill" size={17} color={'red'} />
        </View>
        <View style={styles.upperHeaderInnerRightContainer}>
          <FontAwesome name="plus-square-o" size={28} color="black" />
          <Feather name="menu" size={32} color="black" />
        </View>
      </View>

      {/* Profile */}
      <View style={styles.profileDataContainer}>
        <View style={styles.profileUpperDataContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../assets/images/Amlan.png')}
              style={{height: 90, width: 90, borderRadius: 50}}
            />
          </View>
          <View style={styles.ProfileTextData}>
            <Text style={[styles.textBold, {fontSize: 18}]}>
              {filteredPost.length}
            </Text>
            <Text style={styles.textNormal}>Posts</Text>
          </View>
          <View style={styles.ProfileTextData}>
            <Text style={[styles.textBold, {fontSize: 18}]}>333</Text>
            <Text style={styles.textNormal}>Followers</Text>
          </View>
          <View style={styles.ProfileTextData}>
            <Text style={[styles.textBold, {fontSize: 18}]}>410</Text>
            <Text style={styles.textNormal}>Following</Text>
          </View>
        </View>
        <View style={styles.profileMiddleDataContainer}>
          <Text style={styles.textBold}>Amlanjyoti Sahoo</Text>
          <Text style={styles.textNormal}>Android Developer🧑🏻‍💻</Text>
          <Text style={styles.textNormal}>Game Dev🎮🕹️</Text>
        </View>
        <View style={styles.profileBottomDataContainer}>
          <View style={styles.ProfileBottomInnerContainer}>
            <Text style={styles.textBold}>Edit Profile</Text>
          </View>
          <View style={styles.ProfileBottomInnerContainer}>
            <Text style={styles.textBold}>Share Profile</Text>
          </View>
          <View style={[styles.ProfileBottomInnerContainer, {width: 40}]}>
            <Feather name="user-plus" size={20} color={'black'} />
          </View>
        </View>
      </View>

      {/* Story Highlights */}
      <View style={styles.storyHighlightsContainer}>
        <View style={styles.storyHighlightUpperContainer}>
          <Text style={styles.textBold}>Story Highlights</Text>
          <TouchableOpacity onPress={showStoryHighlightsHandler}>
            <Octicons
              name={showHighlights ? 'chevron-down' : 'chevron-up'}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      {showHighlights ? (
        <View style={styles.storyHighlightsBottomContainer}>
          <Text style={[styles.textNormal, {fontSize: 13}]}>
            Keep your favourite stories on your profile
          </Text>
          <ScrollView
            style={styles.storiesContainer}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {/* <View style={styles.storiesContainer}> */}
            <View style={styles.storyContainer}>
              <AntDesign name="plus" size={30} color={'black'} />
            </View>
            <StoryHighlights />
            <StoryHighlights />
            <StoryHighlights />
            <StoryHighlights />
            {/* </View> */}
          </ScrollView>
        </View>
      ) : null}

      {/* Post area */}
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
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
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
  upperHeaderContainer: {
    height: 50,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperHeaderInnerLeftContainer: {
    width: 165,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15,
  },
  upperHeaderInnerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    width: 70,
    justifyContent: 'space-between',
  },
  profileDataContainer: {},
  profileUpperDataContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 30,
  },
  profileImageContainer: {
    height: 100,
    width: '25%',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileTextData: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileMiddleDataContainer: {
    marginHorizontal: 10,
  },
  profileBottomDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  ProfileBottomInnerContainer: {
    width: 168,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#dfe0e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyHighlightsContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 20,
  },
  storyHighlightUpperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storyHighlightsBottomContainer: {
    marginLeft: 10,
  },
  storiesContainer: {
    marginTop: 10,
  },
  storyContainer: {
    height: 70,
    width: 70,
    borderWidth: 1,
    backgroundColor: '#dfe0e1',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //post
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
