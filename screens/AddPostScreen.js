import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import UploadImage from '../assets/images/UploadImage.jpeg';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {postSlice} from '../store/postSlice';
import Toast from 'react-native-simple-toast';
const AddPostScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData);
  const post = useSelector(state => state.post.postData);

  const [image, setImage] = useState(UploadImage);

  const ImagePicker = async () => {
    try {
      let options = {
        storageOptions: {
          path: 'image',
        },
      };
      const result = await launchImageLibrary(options);
      setImage({uri: result.assets[0].uri});
    } catch (error) {
      console.log(error);
    }
  };
  const savePressHandler = () => {
    dispatch(postSlice.actions.setNewPost(image));
    setImage(UploadImage);
    Toast.showWithGravity('Successfully saved to Posts', Toast.LONG, Toast.TOP);
  };
  const cancelPressHandler = text => {
    setImage(UploadImage);
  };

  return (
    <View style={styles.rootContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.AddPostBottomContainer}>
        <TouchableOpacity onPress={ImagePicker}>
          <View style={styles.AddPostBottomInnerContainer}>
            <Text style={styles.textBold}>Gallery</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.AddPostBottomInnerContainer}>
            <Text style={styles.textBold}>Camera</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.saveSaveContainer}>
        <TouchableOpacity
          onPress={savePressHandler}
          style={styles.PostButtonContainer}>
          <Text style={[styles.textBold, {color: 'white'}]}>Save to Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={cancelPressHandler}
          style={styles.PostButtonContainer}>
          <Text style={[styles.textBold, {color: 'white'}]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPostScreen;

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
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: 400,
    width: '100%',
  },
  AddPostBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  AddPostBottomInnerContainer: {
    width: 168,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#dfe0e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveSaveContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PostButtonContainer: {
    marginTop: 20,
    width: '95%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
