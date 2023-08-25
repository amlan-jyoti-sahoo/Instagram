import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {launchImageLibrary} from 'react-native-image-picker';

import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '../../store/userSlice';

const ProfileData = ({filteredPost}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData);
  const [selectImage, setselectImage] = useState('');

  const ImagePicker = async () => {
    try {
      let options = {
        storageOptions: {
          path: 'image',
        },
      };
      const result = await launchImageLibrary(options);
      setselectImage(result.assets[0].uri);
      dispatch(userSlice.actions.setProfilePhoto(result.assets[0].uri));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.profileDataContainer}>
      <View style={styles.profileUpperDataContainer}>
        <View style={styles.profileImageContainer}>
          <TouchableOpacity onPress={ImagePicker}>
            <Image
              source={user[0].profileImage}
              style={{height: 90, width: 90, borderRadius: 50}}
            />
          </TouchableOpacity>
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
        <Text style={styles.textNormal}>Space🔭👽</Text>
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
  );
};

export default ProfileData;

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
});
