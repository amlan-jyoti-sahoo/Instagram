import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Provider} from 'react-redux';
import {store} from './store/store';
// import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AddPostScreen from './screens/AddPostScreen';
import ReelScreen from './screens/ReelScreen';
import ProfileScreen from './screens/ProfileScreen';
import SavedPostScreen from './screens/SavedPostScreen';

//Screens

const home = 'HomeScreen';
const addPost = 'AddPostScreen';
const search = 'SearchScreen';
const reel = 'ReelScreen';
const profile = 'ProfileScreen';

// const persistor = persistStore(store);
function App() {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();

  function BottomTabScreens() {
    return (
      <BottomTab.Navigator
        initialRouteName={HomeScreen}
        screenOptions={({route}) => ({
          activeTintColor: '#F60081',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopColor: 'transparent',
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === home) {
              iconName = focused ? 'home' : 'home';
            } else if (rn === search) {
              iconName = focused ? 'search' : 'search';
            } else if (rn === addPost) {
              iconName = focused ? 'diff-added' : 'diff-added';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerTitleStyle: {
            color: 'black',
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#000000',
        })}>
        <BottomTab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: 'HomeScreen',
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerTitle: 'search',
          }}
        />
        <BottomTab.Screen
          name="AddPostScreen"
          component={AddPostScreen}
          options={{
            headerTitle: 'AddPost',
          }}
        />
        <BottomTab.Screen
          name="ReelScreen"
          component={ReelScreen}
          options={{
            headerTitle: 'reel',
            tabBarIcon: ({focused, color, size}) => (
              <MaterialIcons
                name={focused ? 'video-collection' : 'video-collection'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
            headerTitle: 'Profile',
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  height: 30,
                  width: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {focused ? (
                  <Image
                    source={require('./assets/images/Amlan.png')}
                    style={{
                      height: 26,
                      width: 26,
                      borderRadius: 50,
                      borderColor: 'black',
                      borderWidth: 1,
                    }}
                  />
                ) : (
                  <Image
                    source={require('./assets/images/Amlan.png')}
                    style={{height: 24, width: 24, borderRadius: 50}}
                  />
                )}
              </View>
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({route}) => ({
            headerStyle: {
              // borderTopColor: 'transparent',
            },
          })}>
          <Stack.Screen
            name="BottomTabScreens"
            component={BottomTabScreens}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SavedPostScreen"
            component={SavedPostScreen}
            options={{headerTitle: 'All Saved Posts'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({});
