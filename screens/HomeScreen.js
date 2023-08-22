import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {UserData} from '../data/userData';

const HomeScreen = () => {
  const renderprofileStatus = ({item}) => {
    return (
      <View style={{height: 100, width: 100}}>
        <View
          style={
            item.hasStatus ? styles.statusImageContainer : styles.imageCotainer
          }>
          <Image source={item.profileImage} style={styles.statusImage} />
        </View>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={[styles.textNormal, {width: 80, textAlign: 'center'}]}>
          {item.userName}
        </Text>
      </View>
    );
  };

  const renderPosts = ({item}) => {
    return (
      <View style={styles.PostRootCotainer}>
        <View style={styles.postHeaderContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.postHeaderImageContainer}>
              <Image
                source={require('../assets/images/Shubham.png')}
                style={styles.postHeaderImage}
              />
            </View>
            <Text style={styles.textBold}>Shubham Kadam</Text>
          </View>
          <Icon
            style={{marginRight: 10}}
            name="ellipsis-vertical"
            size={24}
            color={'black'}
          />
        </View>
        <View>
          <Image
            source={require('../assets/images/Mountain.jpeg')}
            style={styles.postImage}
          />
        </View>
        <View style={styles.postBottomContainer}>
          <View style={styles.postBottomInnerLeftContainer}>
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={30}
              color={'black'}
            />
            <FeatherIcon
              style={{transform: [{rotateY: '180deg'}]}}
              name="message-circle"
              size={30}
              color={'black'}
            />
            <FeatherIcon name="send" size={30} color={'black'} />
          </View>
          <MaterialCommunityIcons
            style={{marginRight: 10}}
            name="bookmark-outline"
            size={30}
            color={'black'}
          />
        </View>
        <Text style={[styles.textBold, {marginLeft: 10}]}>279 likes</Text>
      </View>
    );
  };

  return (
    <View style={styles.rootContainer}>
      {/* Upper Header Container */}
      <View style={styles.upperHeaderContainer}>
        <Image
          source={require('../assets/images/Instagram.png')}
          style={{height: '100%', width: 150}}
        />
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
          <View style={styles.upperHeaderInnerContainer}>
            <Octicons
              style={{
                position: 'absolute',
                right: 4,
                top: 3,
              }}
              name="dot-fill"
              size={17}
              color={'red'}
            />
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={30}
              color={'black'}
            />
          </View>
          <View style={styles.upperHeaderInnerContainer}>
            <FeatherIcon name="message-circle" size={30} color={'black'} />
          </View>
        </View>
      </View>

      {/* ProfileStatus Container */}
      <View style={styles.profileStatusCotainer}>
        {/* <View
          style={{
            height: '100%',
            width: '25%',
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{position: 'absolute', right: 20, bottom: 25}}>
            <Icon name="add-circle-sharp" size={24} color={'#0095ff'} />
          </View>
          <Image
            source={require('../assets/images/Amlan.png')}
            style={{height: 80, width: 80, borderRadius: 50}}
          />
          <Text>Your Story</Text>
        </View> */}
        <View style={styles.statusContainer}>
          <FlatList
            data={UserData}
            renderItem={renderprofileStatus}
            keyExtractor={(item, index) => `${index}`}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/*All Post Container */}
      <View
        style={{
          flex: 1,
          marginTop: 10,
        }}>
        <FlatList data={UserData} renderItem={renderPosts} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  textBold: {
    color: 'black',
    fontWeight: '600',
  },
  textNormal: {
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
  },
  upperHeaderContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upperHeaderInnerContainer: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileStatusCotainer: {
    height: 110,
    width: '100%',
    marginTop: 15,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageCotainer: {
    height: 90,
    width: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusImageContainer: {
    borderWidth: 3,
    height: 90,
    width: 90,
    borderColor: '#b42727',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusContainer: {
    height: '100%',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusImage: {height: 75, width: 75, borderRadius: 50},
  PostRootCotainer: {
    marginBottom: 10,
  },
  postHeaderContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postHeaderImageContainer: {
    borderWidth: 2,
    height: 45,
    width: 45,
    borderColor: '#b42727',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  postHeaderImage: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  postImage: {width: '100%', height: 400},
  postBottomContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postBottomInnerLeftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    width: 130,
  },
});
