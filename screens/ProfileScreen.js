import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';

import MultiAccount from '../components/Profile/MultiAccount';
import StoryHighlightContainer from '../components/Profile/StoryHighlightContainer';
import ProfileData from '../components/Profile/ProfileData';
import YourPostData from '../components/Profile/YourPostData';

const ProfileScreen = () => {
  const user = useSelector(state => state.user.userData);
  const post = useSelector(state => state.post.postData);
  const [multiAccountsModal, setMultiAccountsModal] = useState(false);

  const toggleMultiAccountsModal = () => {
    setMultiAccountsModal(!multiAccountsModal);
  };

  const filteredPost = post.filter(item => item.userId === 1);

  return (
    <View style={styles.rootContainer}>
      {/* Upper Header Container */}
      <View style={styles.upperHeaderContainer}>
        <View style={styles.upperHeaderInnerLeftContainer}>
          <Text style={[styles.textBold, {fontSize: 20}]}>amlan_jyoti_aj</Text>
          <TouchableOpacity onPress={toggleMultiAccountsModal}>
            <Octicons name="chevron-down" size={20} color="black" />
          </TouchableOpacity>
          <Octicons name="dot-fill" size={17} color={'red'} />
        </View>
        <View style={styles.upperHeaderInnerRightContainer}>
          <FontAwesome name="plus-square-o" size={28} color="black" />
          <Feather name="menu" size={32} color="black" />
        </View>
      </View>

      {/* MultiAccountModal */}
      <Modal
        testID={'modal'}
        isVisible={multiAccountsModal}
        onSwipeComplete={() => {}}
        swipeDirection={['up', 'left', 'right', 'down']}
        onBackdropPress={toggleMultiAccountsModal}
        style={styles.multiAccountsModal}>
        <MultiAccount />
      </Modal>

      {/* Profile */}
      <ProfileData filteredPost={filteredPost} />

      {/* Story Highlights */}
      <StoryHighlightContainer />

      {/* Post area */}
      <YourPostData filteredPost={filteredPost} />
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

  //modal
  multiAccountsModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
