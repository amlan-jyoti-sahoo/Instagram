import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserData, UserDataItem, ChatHistoryItem} from '../data/userData';
import { RootState } from './store';

interface UserState {
  userData: UserDataItem[];
  selectedUser: UserDataItem | null;
}

const initialState = {
  userData: UserData,
  selectedUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser: (state : RootState, action :PayloadAction<number>) => {
      state.selectedUser = state.userData.find(
        (item : UserDataItem) => item.userId === action.payload,
      );
    },
    setProfilePhoto: (state: RootState, action) => {
      console.log(action.payload),
        (state.userData[0].profileImage= {uri: action.payload});
    },
    addChat: (state: RootState, action) => {
      if (state.selectedUser) {
        const selectedUserIndex = state.userData.findIndex(
          (user: UserDataItem) => user.userId === state.selectedUser.userId,
        );

        if (selectedUserIndex !== -1) {
          const newChats = {
            sent: {message: action.payload.message, uri: action.payload.uri},
          };
          state.userData[selectedUserIndex].chatsHistory.push(newChats);
        }
      }
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
