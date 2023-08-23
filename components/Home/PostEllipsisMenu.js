import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

const PostEllipsisMenu = () => {
  return (
    <View style={styles.menuModalContainer}>
      <View style={styles.knobContainer}>
        <View style={styles.knob}></View>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.headerBoxContainer}>
          <View style={styles.circle}>
            <MaterialCommunityIcons
              name="bookmark-outline"
              size={30}
              color={'black'}
            />
          </View>
          <Text style={styles.textNormal}>Save</Text>
        </View>
        <View style={styles.headerBoxContainer}>
          <View style={styles.circle}>
            <Feather name="repeat" size={24} color={'black'} />
          </View>
          <Text style={styles.textNormal}>Remix</Text>
        </View>
        <View style={styles.headerBoxContainer}>
          <View style={styles.circle}>
            <MaterialIcons name="qr-code-scanner" size={24} color={'black'} />
          </View>
          <Text style={styles.textNormal}>QR code</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.sendContainer}>
        <View style={{flexDirection: 'row'}}>
          <Feather name="send" size={24} color={'black'} />
          <View>
            <Text style={[styles.textNormal, {fontSize: 12}]}>
              We're moving things around.
            </Text>
            <Text style={[styles.textNormal, {color: '#0095ff', fontSize: 12}]}>
              See where to share and link
            </Text>
          </View>
        </View>
        <EvilIcons name="close" size={24} color={'black'} />
      </View>
      <View style={styles.divider}></View>
      <View style={styles.itemContainer}>
        <MaterialIcons name="star-border" size={24} color={'black'} />
        <Text style={styles.textNormal}>Add to favourites</Text>
      </View>
      <View style={styles.itemContainer}>
        <Feather name="user-minus" size={24} color={'black'} />
        <Text style={styles.textNormal}>Unfollow</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.itemContainer}>
        <MaterialCommunityIcons
          name="information-outline"
          size={24}
          color={'black'}
        />
        <Text style={styles.textNormal}>why you're seeing this post</Text>
      </View>
      <View style={styles.itemContainer}>
        <MaterialCommunityIcons
          name="eye-off-outline"
          size={24}
          color={'black'}
        />
        <Text style={styles.textNormal}>Hide</Text>
      </View>
      <View style={styles.itemContainer}>
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={24}
          color={'black'}
        />
        <Text style={styles.textNormal}>About this account</Text>
      </View>
      <View style={styles.itemContainer}>
        <Octicons name="report" size={20} color={'#eb4242'} />
        <Text style={[styles.textNormal, {color: '#eb4242'}]}>Report</Text>
      </View>
      {/* <MenuBox iconName="settings-outline" title="Setting and Privacy" />
        <MenuBox iconName="bookmark-outline" title="Threads" />
        <MenuBox iconName="bookmark-outline" title="Insight" />
        <MenuBox iconName="bookmark-outline" title="Your activity" />
        <MenuBox iconName="bookmark-outline" title="Archive" />
        <MenuBox iconName="bookmark-outline" title="QR code" />
        <MenuBox iconName="bookmark-outline" title="Saved" />
        <MenuBox iconName="bookmark-outline" title="Supervision" />
        <MenuBox iconName="bookmark-outline" title="Close friends" />
        <MenuBox iconName="bookmark-outline" title="Favourites" />
        <MenuBox iconName="bookmark-outline" title="Discount people" /> */}
    </View>
  );
};

export default PostEllipsisMenu;

const styles = StyleSheet.create({
  menuModalContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  knobContainer: {
    width: '100%',
    alignItems: 'center',
  },
  knob: {
    height: 5,
    width: 35,
    borderWidth: 1,
    backgroundColor: '#7b7777',
    borderRadius: 50,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#e4e0e0',
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
    marginLeft: 10,
  },
  menuContainer: {
    marginTop: 10,
    width: '100%',
  },
  itemContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sendContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginVertical: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  headerBoxContainer: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
});
