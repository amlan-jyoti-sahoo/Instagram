import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '.././store/userSlice';

const ProfileStatus = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData);

  const renderprofileStatus = ({item}) => {
    function ProfilePressHandler() {
      dispatch(userSlice.actions.showStory(item.userId));
    }
    return (
      <View style={[styles.statusContainer]}>
        <TouchableOpacity onPress={ProfilePressHandler}>
          <View
            style={
              item.hasStatus
                ? styles.statusImageContainer
                : styles.nonStatusImageContainer
            }>
            <Image source={item.profileImage} style={styles.statusImage} />
          </View>
        </TouchableOpacity>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={[styles.textNormal, {width: 80, textAlign: 'center'}]}>
          {item.userName}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.profileStatusCotainer}>
      {/* <View style={styles.yourStoryContainer}>
        <View style={{position: 'absolute', right: 20, bottom: 25}}>
        <Icon name="add-circle-sharp" size={24} color={'#0095ff'} />
      </View>
        <Image
          source={require('../assets/images/Amlan.png')}
          style={{height: 80, width: 80, borderRadius: 50}}
        />
        <Text style={[styles.textNormal, {width: 80, textAlign: 'center'}]}>
          Your Story
        </Text>
      </View> */}
      <View style={styles.statusContainer}>
        <FlatList
          data={user}
          renderItem={renderprofileStatus}
          keyExtractor={(item, index) => `${index}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ProfileStatus;

const styles = StyleSheet.create({
  textBold: {
    color: 'black',
    fontWeight: '600',
  },
  textNormal: {
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
  },

  profileStatusCotainer: {
    height: 110,
    width: '100%',
    marginTop: 15,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  yourStoryContainer: {
    height: 100,
    width: '25%',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusContainer: {
    height: 110,
    marginRight: 10,
    alignItems: 'center',
  },
  nonStatusImageContainer: {
    borderWidth: 1,
    height: 87,
    width: 87,
    borderRadius: 50,
    borderColor: '#afaeae',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusImageContainer: {
    borderWidth: 3,
    height: 87,
    width: 87,
    borderColor: '#b42727',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusImage: {height: 75, width: 75, borderRadius: 50},
});
