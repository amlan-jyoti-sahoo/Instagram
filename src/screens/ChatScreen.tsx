import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import RecieverChat from '../components/Messanger/RecieverChat';
import SenderChat from '../components/Messanger/SenderChat';
import SenderImage from '../components/Messanger/SenderImage';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import IconButton from '../components/Messanger/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {userSlice} from '../store/userSlice';
import PhotoRender from './PhotoRender';
import { RootState } from '../store/store';
import { ChatHistoryItem } from '../data/userData';

function ChatScreen({navigation}: {navigation: any}) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.selectedUser);

  // console.log(user.userName);
  // const {item} = route.params;
  const senderProfileImage = user.profileImage;
  const [message, setMessage] = useState('');
  const [chatMessages, setchatMessages] = useState(user.chatsHistory);
  const [photo, setPhoto] = useState({
    assets: [
      {
        fileName: '',
        fileSize: 64253,
        height: 1920,
        type: 'image/jpeg',
        uri: '',
        width: 1440,
      },
    ],
  });
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(!isModalVisible);
    setPhoto({
      assets: [
        {
          fileName: '',
          fileSize: 64253,
          height: 1920,
          type: 'image/jpeg',
          uri: '',
          width: 1440,
        },
      ],
    });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'chat App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
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
      mediaType: 'mixed',
      quality: 0.5,
      saveToPhotos: true,
    });
    if (!result.didCancel) {
      setPhoto(result);
      toggleModal();
    }
    // navigation.navigate('PhotoRender', {
    //   imageUri: result.assets[0].uri,
    //   functionIdentifier: 'sendMessageHandler',
    // });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: user.userName,
    });
  }, []);

  function renderChats({item}: {item: ChatHistoryItem}) {
    return (
      <>
        {item.sent.uri !== '' ? (
          <SenderImage imageUri={item.sent.uri} message={item.sent.message} />
        ) : (
          <SenderChat message={item.sent.message} />
        )}
        {item.recieve != null ? (
          <RecieverChat
            message={item.recieve.message}
            profileImage={senderProfileImage}
          />
        ) : null}
      </>
    );
  }

  function messageInputHandler(text : string) {
    setMessage(text);
  }

  function sendMessageHandler() {
    const uri = photo.assets[0].uri;
    if (message !== '' || uri !== '') {
      dispatch(userSlice.actions.addChat({message: message, uri: uri}));
      const tempMsgs = [...chatMessages];
      setchatMessages([...tempMsgs, {sent: {message: message, uri: uri}}]);
    }
    // setModalVisible(false);
    setMessage('');
    setPhoto({
      assets: [
        {
          fileName: '',
          fileSize: 64253,
          height: 1920,
          type: 'image/jpeg',
          uri: '',
          width: 1440,
        },
      ],
    });
    closeModal();
  }

  return (
    <>
      {photo.assets[0].uri ? (
        <Modal isVisible={isModalVisible}>
          <View
            style={{
              flex: 1,
              height: '100%',
              width: '100%',
              backgroundColor: '#000000',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IconButton
              icon="close"
              size={24}
              color="black"
              onPress={closeModal}
            />
            <Image
              source={{uri: photo.assets[0].uri}}
              style={{height: '100%', width: '100%'}}
            />
            <View style={styles.bottomContainer}>
              <View style={styles.bottomInnerContainer}>
                <TextInput
                  style={styles.searchPersonInput}
                  placeholder="Write message"
                  placeholderTextColor={'#232323'}
                  value={message}
                  keyboardType="default"
                  // autoCorrect={false}
                  returnKeyType="done"
                  onChangeText={messageInputHandler}
                />
                <IconButton
                  icon={'send'}
                  size={30}
                  color={'#943f3f'}
                  onPress={sendMessageHandler}
                />
              </View>
            </View>
          </View>
        </Modal>
      ) : (
        <View style={styles.Container}>
          <View style={styles.renderChatContaienr}>
            <FlatList
              data={chatMessages}
              renderItem={renderChats}
              keyExtractor={(item, index) => `${index}`}
            />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomInnerContainer}>
              <IconButton
                icon={'camera'}
                size={30}
                color={'#943f3f'}
                onPress={() => {
                  requestCameraPermission();
                  console.log('camera pressed');
                }}
              />
              <TextInput
                style={styles.searchPersonInput}
                placeholder="Write message"
                placeholderTextColor={'#232323'}
                value={message}
                keyboardType="default"
                // autoCorrect={false}
                returnKeyType="done"
                onChangeText={messageInputHandler}
              />
              <IconButton
                icon={'send'}
                size={30}
                color={'#943f3f'}
                onPress={sendMessageHandler}
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#cfc5c5',
  },
  renderChatContaienr: {height: '86%', backgroundColor: '#cfc5c5'},
  divider: {},
  bottomContainer: {
    width: '100%',
    height: '14%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  bottomInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'black',
    marginVertical: 10,
  },
  searchPersonInput: {
    minWidth: 250,
    borderRadius: 20,
    backgroundColor: '#cad0d0',
    padding: 13,
    fontSize: 18,
    marginHorizontal: 10,
    color: 'black',
  },
});
