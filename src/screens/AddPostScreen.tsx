import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import UploadImage from '../assets/images/UploadImage.jpeg';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {postSlice} from '../store/postSlice';
import Toast from 'react-native-simple-toast';
import { RootState } from '../store/store';

const AddPostScreen : React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state : RootState) => state.user.userData);
  const post = useSelector((state : RootState)  => state.post.postData);

  const [image, setImage] = useState(UploadImage);

  const ImagePicker = async () => {
    interface ImageLibraryOptions {
      path?: string; // Add this line to include the 'path' property
    }
  
    try {
      let options = {
        storageOptions: {
          path: 'image',
        },
      };
      const result = await launchImageLibrary(options);
      if (result && !result.didCancel && result.assets && result.assets.length > 0) {
        setImage({ uri: result.assets[0].uri });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const savePressHandler = () => {
    dispatch(postSlice.actions.setNewPost(image));
    setImage(UploadImage);
    Toast.showWithGravity('Successfully saved to Posts', Toast.LONG, Toast.TOP);
  };
  const cancelPressHandler = () => {
    setImage(UploadImage);
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Instagram App Camera Permission',
          message:
            'Instgram Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        openCamera();
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.5,
      saveToPhotos: true,
    });
    
    if (result && !result.didCancel && result.assets && result.assets.length > 0) {
      setImage({ uri: result.assets[0].uri });
    }
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
        <TouchableOpacity
          onPress={() => {
            requestCameraPermission();
            console.log('camera pressed');
          }}>
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
    // fontWeight: '600',
    fontFamily: 'Muli-Bold',
  },
  textNormal: {
    fontSize: 14,
    color: 'black',
    // fontWeight: '400',
    fontFamily: 'Muli-Regular',
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
