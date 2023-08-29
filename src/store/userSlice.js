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
    addChat: (state, action) => {
      if (state.selectedUser) {
        const selectedUserIndex = state.userData.findIndex(
          user => user.id === state.selectedUser.id,
        );

        if (selectedUserIndex !== -1) {
          const newChats = {
            sent: {message: action.payload.message, uri: action.payload.uri},
          };
          state.userData[selectedUserIndex].chatsHistory.push(newChats);
        }
      }

      // console.log(action.payload);
      // console.log('user:', state.selectedUser.userId);
      //   console.log(userId);
      console.log(state.userData[state.selectedUser.userId - 1].chatsHistory);
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
