import {
  SafeAreaView,
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
import PostDataContainer from '../components/Profile/PostDataContainer';
import Menu from '../components/Profile/Menu';
import { RootState } from '../store/store';
import { PostDataItem } from '../data/postData';
import { ReelDataItem } from '../data/reelData';

const ProfileScreen = ({navigation}: {navigation: any}) => {
  const user = useSelector((state: RootState) => state.user.userData);
  const post = useSelector((state: RootState) => state.post.postData);
  const reel = useSelector((state: RootState) => state.reel.reelData);
  const [multiAccountsModal, setMultiAccountsModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);

  const toggleMultiAccountsModal = () => {
    setMultiAccountsModal(!multiAccountsModal);
  };

  const toggleMenuModal = () => {
    setMenuModal(!menuModal);
  };

  const savedMenuPressHandler = () => {
    toggleMenuModal();
    navigation.navigate('SavedPostScreen');
  };

  const filteredPost = post.filter((item : PostDataItem) => item.userId === 1);
  const filteredReel = reel.filter((item: ReelDataItem) => item.userId === 1);

  return (
    <SafeAreaView style={styles.rootContainer}>
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
          <TouchableOpacity onPress={toggleMenuModal}>
            <Feather name="menu" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile */}
      <ProfileData filteredPost={filteredPost} />

      {/* Story Highlights */}
      <StoryHighlightContainer />

      {/* Post area */}
      <PostDataContainer
        filteredPost={filteredPost}
        filteredReel={filteredReel}
      />

      {/* MultiAccountModal */}
      <Modal
        testID={'modal'}
        isVisible={multiAccountsModal}
        onSwipeComplete={() => {}}
        swipeDirection={['down']}
        onBackdropPress={toggleMultiAccountsModal}
        style={styles.modal}>
        <MultiAccount />
      </Modal>

      {/* MenuModal */}
      <Modal
        testID={'modal'}
        isVisible={menuModal}
        onSwipeComplete={() => {}}
        swipeDirection={['down']}
        onBackdropPress={toggleMenuModal}
        style={styles.modal}>
        <Menu savedMenuPressHandler={savedMenuPressHandler} />
      </Modal>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  textBold: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Muli-Bold',
  },
  textNormal: {
    fontSize: 14,
    color: 'black',
    fontWeight: '400',
    fontFamily: 'Muli-Regular',
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

  //Modal
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
