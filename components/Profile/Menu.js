import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Menu = ({savedMenuPressHandler}) => {
  return (
    <View style={styles.menuModalContainer}>
      <View style={styles.knobContainer}>
        <View style={styles.knob}></View>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.itemContainer}>
          <SimpleLineIcons name="settings" size={24} color={'black'} />
          <Text style={styles.textNormal}>Setting and Privacy</Text>
        </View>
        <View style={styles.itemContainer}>
          <MaterialIcons name="tag" size={24} color={'black'} />
          <Text style={styles.textNormal}>Threads</Text>
        </View>
        <View style={styles.itemContainer}>
          <SimpleLineIcons name="chart" size={24} color={'black'} />
          <Text style={styles.textNormal}>Insight</Text>
        </View>
        <View style={styles.itemContainer}>
          <Ionicons name="timer-outline" size={24} color={'black'} />
          <Text style={styles.textNormal}>Your activity</Text>
        </View>
        <View style={styles.itemContainer}>
          <MaterialCommunityIcons
            name="archive-clock-outline"
            size={24}
            color={'black'}
          />
          <Text style={styles.textNormal}>Archive</Text>
        </View>
        <View style={styles.itemContainer}>
          <MaterialIcons name="qr-code-scanner" size={24} color={'black'} />
          <Text style={styles.textNormal}>QR code</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            savedMenuPressHandler();
          }}>
          <View style={styles.itemContainer}>
            <Ionicons name="bookmarks-outline" size={24} color={'black'} />
            <Text style={styles.textNormal}>Saved</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.itemContainer}>
          <MaterialCommunityIcons
            name="account-supervisor-outline"
            size={24}
            color={'black'}
          />
          <Text style={styles.textNormal}>Supervision</Text>
        </View>
        <View style={styles.itemContainer}>
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={24}
            color={'black'}
          />
          <Text style={styles.textNormal}>Close friends</Text>
        </View>
        <View style={styles.itemContainer}>
          <MaterialIcons name="star-border" size={24} color={'black'} />
          <Text style={styles.textNormal}>Favourites</Text>
        </View>
        <View style={styles.itemContainer}>
          <Feather name="user-plus" size={20} color={'black'} />
          <Text style={styles.textNormal}>Discover people</Text>
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
    </View>
  );
};

export default Menu;

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
});
