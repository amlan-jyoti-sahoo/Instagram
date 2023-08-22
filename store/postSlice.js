import {createSlice} from '@reduxjs/toolkit';
import {PostData} from '../data/postData';

const initialState = {
  postData: PostData,
  selectedPost: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    // setLike: (state, action) => {
    //   state.selectedPost = state.postData.find(
    //     item => item.userId === action.payload,
    //   );
    // },
  },
});
