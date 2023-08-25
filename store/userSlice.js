import {createSlice} from '@reduxjs/toolkit';
import {UserData} from '../data/userData';

const initialState = {
  userData: UserData,
  selectedUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = state.userData.find(
        item => item.userId === action.payload,
      );
    },
    setProfilePhoto: (state, action) => {
      console.log(action.payload),
        (state.userData[0].profileImage = {uri: action.payload});
    },
    showStory: (state, action) => {
      const tappedUserIndex = state.userData.findIndex(
        user => user.userId === action.payload,
      );

      state.userData[tappedUserIndex].hasStatus = false;
      console.log(state.userData[tappedUserIndex].hasStatus);
    },
  },
});
