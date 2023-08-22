import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OtherAccount from './UI/OtherAccount';

const MultiAccount = () => {
  return (
    <View style={styles.accountInnerModal}>
      <View style={styles.knobContainer}>
        <View style={styles.knob}></View>
      </View>
      <OtherAccount
        image={require('../assets/images/Amlan.png')}
        name="amlan_jyoti_aj"
        color={'#0a98fe'}
        icon="radio-button-checked"
      />
      <OtherAccount
        image={require('../assets/images/echho.png')}
        name="echho__"
        color={'black'}
        icon="radio-button-unchecked"
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 150,
          justifyContent: 'space-between',
        }}>
        <View style={styles.addAccountLogoContainer}>
          <AntDesign name="plus" size={30} color={'black'} />
        </View>
        <Text style={styles.textBold}>Add account</Text>
      </View>
    </View>
  );
};

export default MultiAccount;

const styles = StyleSheet.create({
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
  },
  accountInnerModal: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  addAccountLogoContainer: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
