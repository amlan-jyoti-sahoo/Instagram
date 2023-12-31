import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../store/store';

function ProfileImage({navigation}: {navigation : any}) {
  const user = useSelector((state: RootState) => state.user.selectedUser);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: user.userName,
    });
  }, []);

  console.log('ProfileImage', user);
  const profileImage = user.profileImage;
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.ProfileImage} />
    </View>
    // <Text></Text>
  );
}

export default ProfileImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileImage: {
    width: '100%',
    maxHeight: 400,
    backgroundColor: '#f90000',
  },
});
