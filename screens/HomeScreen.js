import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfileStatus from '../components/Home/ProfileStatus';
import Posts from '../components/Home/Posts';
import PostEllipsisMenu from '../components/Home/PostEllipsisMenu';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
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
      <ProfileStatus />

      {/*All Post Container */}
      <Posts />
    </SafeAreaView>
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
  //Modal
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
