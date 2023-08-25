import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const AddPostScreen = () => {
  const [inputText, setInputText] = useState('');
  const handleInputChange = text => {
    setInputText(text);
  };
  return <View style={styles.rootContainer}></View>;
};

export default AddPostScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
