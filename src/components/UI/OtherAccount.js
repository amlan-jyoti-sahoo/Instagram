import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OtherAccount = ({image, name, icon, color}) => {
  return (
    <View style={styles.accountContainer}>
      <View style={styles.accountInnerLeftContainer}>
        <Image source={image} style={styles.accountImage} />
        <Text style={styles.textBold}>{name}</Text>
      </View>
      <MaterialIcons name={icon} size={24} color={color} />
    </View>
  );
};

export default OtherAccount;

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
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountInnerLeftContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountImage: {height: 60, width: 60, borderRadius: 50, marginRight: 10},
});
