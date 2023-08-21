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
import {UserData} from '../data/userData';

const HomeScreen = () => {
  const renderprofileStatus = ({item}) => {
    return (
      <View style={{height: 100, width: 100}}>
        <View
          style={
            item.hasStatus ? styles.imageCotainer : styles.statusImageContainer
          }>
          <Image
            source={item.profileImage}
            style={{height: 75, width: 75, borderRadius: 50}}
          />
        </View>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{width: 80, color: 'black', textAlign: 'center'}}>
          {item.userName}
        </Text>
      </View>
    );
  };

  const renderPosts = ({item}) => {
    return (
      <>
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                borderWidth: 2,
                height: 45,
                width: 45,
                borderColor: '#b42727',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/Shubham.png')}
                style={{height: 35, width: 35, borderRadius: 50}}
              />
            </View>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                fontWeight: '500',
                marginLeft: 10,
              }}>
              Shubham Kadam
            </Text>
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
            style={{width: '100%', height: 400}}
          />
        </View>
        <View
          style={{
            height: 50,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="heart-outline" size={30} color={'black'} />
            {/* <Icon name="" size={30} color={'black'} />
              <Icon name="s" size={30} color={'black'} /> */}
          </View>
        </View>
      </>
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
            <Icon name="heart-outline" size={30} color={'black'} />
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
        <View
          style={{
            height: '100%',
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
  imageCotainer: {
    borderWidth: 3,
    height: 90,
    width: 90,
    borderColor: '#b42727',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileStatusCotainer: {
    height: 110,
    width: '100%',
    marginTop: 15,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusImageContainer: {
    height: 90,
    width: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
